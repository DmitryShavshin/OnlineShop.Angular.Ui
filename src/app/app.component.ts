import { Component } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(private productService: ProductService) {}

   title = 'OnlineShop.Angular.Ui';
  // products: Product[] = [];
  // productToEdit?: Product;

  // ngOnInit() : void{
  //   this.productService
  //   .getProducts()
  //   .subscribe((result: Product[]) => (this.products = result));    
  //   console.log(this.products);
  // }

  // initNewProduct(){
  //   this.productToEdit = new Product();
  // }

  // editProduct(product: Product){
  //   this.productToEdit = product;
  // }

  // updateProductList(products: Product[]){
  //   this.products = products;
  // }
}
