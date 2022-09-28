import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
    ) { }

  product?: IProduct;
  productSubscription?: Subscription

  ngOnInit(): void {
    this.productSubscription = this.route.data
      .subscribe((data) => { 
        this.product = data['data'] 
    });
  }
}