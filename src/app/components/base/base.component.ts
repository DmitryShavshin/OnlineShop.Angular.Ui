import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/models/ICart';
import { IProduct } from 'src/app/models/product';
import { CartService, CART_ID } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }
  
  products: IProduct[] = [];
  carts: ICart[] = [];
  cart!: ICart;
  
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: IProduct[]) =>
    {
      this.products = data;
    });
  }


  addToCart(id?: string){
    if(localStorage.getItem(CART_ID)){
      const raw = localStorage.getItem(CART_ID);
      const cart = JSON.parse(raw as string);
      let cartId;
      cart.forEach((element: { cartId: any; }) => {
           cartId = element.cartId     
      });
      console.log(cartId);
      this.cartService.addProductToCart(id,cartId)
        .subscribe( (data: ICart[]) => 
          { this.carts = data });
    }else{
      this.cartService.addProductToCart(id)
      .subscribe( ( data: ICart[] ) => 
      {
        this.carts = data;
      });
    }
  }
}