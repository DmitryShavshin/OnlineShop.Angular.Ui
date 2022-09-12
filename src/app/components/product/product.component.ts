import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  productSubscription?: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productSubscription = this.productService
      .getProducts()
      .subscribe((data: IProduct[]) =>
    {
      this.products = data;
    });
  }
  ngOnDestroy(){
    if(this.productSubscription)
      this.productSubscription.unsubscribe();
  }
}
