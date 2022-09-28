import { Component, Injectable, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICart } from 'src/app/models/ICart';
import { IProduct } from 'src/app/models/product';
import { CartService, CART_ID } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
@Injectable()
export class CartComponent implements OnInit {
 
  constructor(private cartSevice: CartService) { }

  cart: ICart[] = [];
  products: IProduct[] = [];

  ngOnInit(): void {
    if(localStorage.getItem(CART_ID)){
      const raw = localStorage.getItem(CART_ID);
      this.cart = JSON.parse(raw as string);
    }
  }
}