import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import {MatAccordion} from '@angular/material/expansion';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  product!: IProduct;
  productFromRoute!: IProduct;

  ngOnInit(): void {
    this.route.data.subscribe((data) => { this.productFromRoute = data['data'] });
    this.productService.getProduct(this.productFromRoute.id).subscribe( (element) => { this.product = element });
  }

  addToCart(id: string){
    
  }
}