import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICart } from 'src/app/models/cart';
import { IProduct } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  
  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) { }
  
  products: IProduct[] = [];
  carts: ICart[] = [];
  cart!: ICart;
  cartSubscription?: Subscription;


  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: IProduct[]) =>
    {
      this.products = data;
    });
  }


  addToCart(id?: string){
    // console.log("product id:" + id)
    // this.cartSubscription = this.cartService.addProductToCart(id)
    //   .subscribe( (data: ICart[] ) => 
    //   {
    //     this.carts = data;
    //   });
    //   console.log()
      
      // this.carts.forEach(element => {
      //   console.log("cart id:" + element.cartId)
      // }); 
  
  // this.carts.forEach(element => {
  //      console.log(this.cart.cartId = element.cartId)
  // });
  // console.log(this.cart.cartId)
  // localStorage.setItem(CART_ID , this.cart.cartId)
  }
}
