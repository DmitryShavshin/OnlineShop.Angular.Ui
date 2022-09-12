import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';

@Injectable({
    providedIn: 'root'
})

export class BrandSevice{
    constructor(private http: HttpClient) { }

    private url = "Brand";
    private brandUpdate = "UpdateBrand";
    private brandCreate = "CreateBrand";
    private brandDelete = "DeleteBrand";
  
    public getBrands(): Observable<Brand[]>{
       return this.http.get<Brand[]>(`${environment.apiUrl}/${this.url}`);
    }
  
    public updateBrand(brand: Brand) : Observable<Brand[]>{
      return this.http.put<Brand[]>(`${environment.apiUrl}/${this.url}/${this.brandUpdate}`, brand);
    }
  
    public createBrand(brand: Brand) : Observable<Brand[]>{
      return this.http.post<Brand[]>(`${environment.apiUrl}/${this.url}/${this.brandCreate}`, brand);
    }
    
    public deleteBrand(brand: Brand) : Observable<Brand[]>{
      return this.http.delete<Brand[]>(`${environment.apiUrl}/${this.url}/${this.brandDelete}/${brand.id}`);
    }
}