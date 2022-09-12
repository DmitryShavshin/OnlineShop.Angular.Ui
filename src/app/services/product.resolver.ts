import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { IProduct } from '../models/product';
import { ProductService } from './product.service';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<IProduct> {

  constructor(
    private productService: ProductService,
    private router: Router
    ) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    return this.productService
      .getProduct(route.params?.['id'])
      .pipe(catchError(() => { this.router.navigate(['/']);
      return EMPTY
    })
  );
  }
}
