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

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${environment.apiUrl}/${this.url}`);
  }

  getProduct(id: string): Observable<IProduct>{
    return this.http.post<IProduct>(`${environment.apiUrl}/${this.url}/${this.getProductUrl}/${id}`, id);
  }

  createProduct(product: IProduct): Observable<IProduct[]>{
    return this.http.post<IProduct[]>(`${environment.apiUrl}/${this.url}/${this.productCreate}`, product);
  }

  public deleteProduct(id: string): Observable<IProduct[]>{
    return this.http.delete<IProduct[]>(`${environment.apiUrl}/${this.url}/${this.productDelete}/${id}`);
  }

  public updateProduct(product: IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`${environment.apiUrl}/${this.url}/${this.productUpdate}`, product);
  }
}