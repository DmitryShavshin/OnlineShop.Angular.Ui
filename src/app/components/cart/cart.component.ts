import { Component, Injectable, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ICart } from 'src/app/models/cart';
import { CartService, CART_ID } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
@Injectable()
export class CartComponent implements OnInit {
[x: string]: any;
 
  constructor(
    private cartService: CartService
  ) {
    this.dataSource = new MatTableDataSource(this.cart);
   }
  
  dataSource!: MatTableDataSource<ICart>;
  displayedColumns: string[] = ['item', 'count', 'cost', 'total', 'buttons'];
  cart: ICart[] = [];
  cartId: string = "";

  ngOnInit(): void {
    if(localStorage.getItem(CART_ID)){
      const raw = localStorage.getItem(CART_ID);
      this.cart = JSON.parse(raw as string);
      this.cart.forEach(element => {
        this.cartId = element.cartId
      });
    }
  }

  plusCount(cartId: string, productId: string){
     this.cartService.addProductToCart(productId, cartId)
     .subscribe( (data) => this.cart = data );
  }

  minusCount(cartId: string, productId: string){
    this.cartService.minusCount(productId, cartId)
     .subscribe( (data) => this.cart = data );
  }

   /** Gets the total cost of all transactions. */
  getTotalCost() {
    var total;
    total = this.cart.map(t => t.product.price * t.amount)
    return this.sum(total);
  }

  private sum(item: any){
    var totalPrice = 0;
    for (let i = 0; i < item.length; i++) {
      totalPrice += item[i];
    }
    return totalPrice;
  }

  removeItem(cartId?: string, productId?: string){
    this.cartService.removeProduct(productId, cartId)
      .subscribe( (data) => { this.cart = data });
  }

  clearCart(cartId: string){
    this.cartService.clearCart(cartId);  
  }

  getOrder(cartId: string){
    console.log("getOrder " + cartId)
  }
}