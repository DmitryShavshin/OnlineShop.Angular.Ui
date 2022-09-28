import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, timeout, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICart } from '../models/ICart';
import { IProduct } from '../models/product';

export const CART_ID = 'cart_Id';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }

  private url = "Cart";
  private addToCart = "AddToCart";
  private getProducts = "getProductsFromCart";

  // addProductToCart(id?: string, cartId?: string): Observable<ICart[]>{
  //    return this.http.post<ICart[]>(`${environment.apiUrl}/${this.url}/${this.addToCart}/${id}`, id);
  //   //  .pipe(cart => {
  //   //   cart.forEach(element => {
  //   //     localStorage.setItem(CART_ID,  element.cartId as string)
  //   //   });  
  //   // });
  // }

  addProductToCart(productId?: string, cartId?: string): Observable<ICart[]>{
    console.log(productId, cartId)
    return this.http.post<ICart[]>(`${environment.apiUrl}/${this.url}/${this.addToCart}`, { cartId, productId })
    .pipe(
      timeout(1000),
      tap(element => {
        console.log(element)
        localStorage.setItem(CART_ID, JSON.stringify(element))
      })
    );
 }


  getProductsFromCart(cartId?: string): Observable<ICart[]>{
    return this.http.post<ICart[]>(`${environment.apiUrl}/${this.url}/${this.getProducts}`, {cartId});
  }

  addItem(product: IProduct){
    
  }

  removeItem(product: IProduct){

  }

  removeProduct(product: IProduct){

  }
}