import { Component, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { ICart } from 'src/app/models/ICart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cartSevice: CartService) { }

  cart!: ICart;
  cartSubscription?: Subscription;


  ngOnInit(): void {
    // this.cartSubscription = this.cartSevice
    //   .getProductsFromCart()
    //   .subscribe( (data: ICart) => { 
    //     this.cart = data 
    // });
    // console.log(this.cart)
  }

}
