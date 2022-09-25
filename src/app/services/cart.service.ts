import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICart } from '../models/ICart';
import { IProduct } from '../models/product';

const CART_ID = 'cartId';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }

  private url = "Cart";
  private addToCart = "AddToCart";
  private getProducts = "getProductsFromCart";

  addProductToCart(id?: string, cartId?: string){
     return this.http.post<ICart[]>(`${environment.apiUrl}/${this.url}/${this.addToCart}/${id}`, id);
    //  .pipe(cart => {
    //   cart.forEach(element => {
    //     localStorage.setItem(CART_ID,  element.cartId as string)
    //   });  
    // });
  }

  getProductsFromCart(id?: string){
    return this.http.get<ICart>(`${environment.apiUrl}/${this.url}/${this.getProducts}/${id}`);
  }

  addItem(product: IProduct){
    
  }

  removeItem(product: IProduct){

  }

  removeProduct(product: IProduct){

  }
}