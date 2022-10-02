import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, timeout, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICart } from '../models/cart';


export const CART_ID = 'cart_Id';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }

  private url = "Cart";
  private addToCart = "AddToCart";
  private minusCounRoute = "MinusCount";
  private removeProductRoute = "RemoveProduct";
  private getProducts = "GetProductsFromCart";
  private clearCartRoute = "ClearCart";

  addProductToCart(productId?: string, cartId?: string): Observable<ICart[]>{
    console.log(productId, cartId)
    return this.http.post<ICart[]>(`${environment.apiUrl}/${this.url}/${this.addToCart}`, { cartId, productId })
    .pipe(
      timeout(1000),
      tap(element => {
        localStorage.setItem(CART_ID, JSON.stringify(element))
      })
    );
 }

  getProductsFromCart(cartId?: string): Observable<ICart[]>{
    return this.http.post<ICart[]>(`${environment.apiUrl}/${this.url}/${this.getProducts}`, {cartId});
  }

  minusCount(productId?: string, cartId?: string): Observable<ICart[]>{
    return this.http.post<ICart[]>(`${environment.apiUrl}/${this.url}/${this.minusCounRoute}`, { cartId, productId })
    .pipe(
      tap( element => {
        localStorage.removeItem(CART_ID)
        localStorage.setItem(CART_ID, JSON.stringify(element));
      })
    );
  }

  removeProduct(productId?: string, cartId?: string): Observable<ICart[]>{
    return this.http.post<ICart[]>(`${environment.apiUrl}/${this.url}/${this.removeProductRoute}`, { cartId, productId })
    .pipe(
      tap( element => {
        localStorage.removeItem(CART_ID)
        localStorage.setItem(CART_ID, JSON.stringify(element));
      })
    );
  }

   clearCart(id?: string): Observable<ICart[]>{
    return this.http.delete<ICart[]>(`${environment.apiUrl}/${this.url}/${this.clearCartRoute}/${id}`)
    .pipe(
      tap( element => {
        if(!element){
          localStorage.removeItem(CART_ID);
        } 
      })
    );
  }
}