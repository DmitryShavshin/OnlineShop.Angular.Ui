import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { IBrand } from '../models/brand';

@Injectable({
    providedIn: 'root'
})

export class BrandSevice{
    constructor(private http: HttpClient) { }

    private url = "Brand";
    private brandUpdate = "UpdateBrand";
    private brandCreate = "CreateBrand";
    private brandDelete = "DeleteBrand";
  
    public getBrands(): Observable<IBrand[]>{
       return this.http.get<IBrand[]>(`${environment.apiUrl}/${this.url}`);
    }
  
    public updateBrand(brand: IBrand) : Observable<IBrand[]>{
      return this.http.put<IBrand[]>(`${environment.apiUrl}/${this.url}/${this.brandUpdate}`, brand);
    }
  
    public createBrand(brand: IBrand) : Observable<IBrand[]>{
      return this.http.post<IBrand[]>(`${environment.apiUrl}/${this.url}/${this.brandCreate}`, brand);
    }
    
    public deleteBrand(brand: IBrand) : Observable<IBrand[]>{
      return this.http.delete<IBrand[]>(`${environment.apiUrl}/${this.url}/${this.brandDelete}/${brand.id}`);
    }
}