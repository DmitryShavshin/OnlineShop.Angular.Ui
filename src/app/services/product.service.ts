import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) { }

  private url = "Product";
  private getProductUrl = "GetProduct";
  private productUpdate = "UpdateProduct";
  private productCreate = "CreateProduct";
  private productDelete = "Delete";

  getProducts(){
    return this.http.get<IProduct[]>(`${environment.apiUrl}/${this.url}`);
  }

  getProduct(id: string){
    return this.http.post<IProduct>(`${environment.apiUrl}/${this.url}/${this.getProductUrl}/${id}`, id);
  }

  createProduct(product: IProduct){
    return this.http.post<IProduct[]>(`${environment.apiUrl}/${this.url}/${this.productCreate}`, product);
  }

  public deleteProduct(id: string){
    return this.http.delete<IProduct[]>(`${environment.apiUrl}/${this.url}/${this.productDelete}/${id}`);
  }

  public updateProduct(product: IProduct){
    return this.http.put<IProduct>(`${environment.apiUrl}/${this.url}/${this.productUpdate}`, product);
  }

  // private url = "Product";
  // private productUpdate = "UpdateProduct";
  // private productCreate = "CreateProduct";
  // private productDelete = "Delete";

  // public getProducts(): Observable<Product[]>{
  //    return this.http.get<Product[]>(`${environment.apiUrl}/${this.url}`);
  // }

  // public updateProduct(product: Product) : Observable<Product[]>{
  //   return this.http.put<Product[]>(`${environment.apiUrl}/${this.url}/${this.productUpdate}`, product);
  // }

  // public createProduct(product: Product) : Observable<Product[]>{
  //   return this.http.post<Product[]>(`${environment.apiUrl}/${this.url}/${this.productCreate}`, product);
  // }
  
  // public deleteProduct(product: Product) : Observable<Product[]>{
  //   return this.http.delete<Product[]>(`${environment.apiUrl}/${this.url}/${this.productDelete}/${product.id}`);
  // }
}
