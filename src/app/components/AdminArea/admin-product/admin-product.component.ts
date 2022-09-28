import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { DialogBoxComponent } from '../../UI/dialog-box/dialog-box.component';

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})

export class AdminProductComponent implements AfterViewInit {

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(this.products);
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'name', 'title', 'price', 'create'];
  dataSource!: MatTableDataSource<IProduct>;
  products: IProduct[] = [];
  product?: IProduct;

  ngOnInit(): void {
    this.productService.getProducts().subscribe(( data: IProduct[] ) => 
    {
      this.products = data;
    });
  }

  openDialog(product?: IProduct): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = product;
    
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);
    
    // Create Product after close dialog ref
    dialogRef.afterClosed().subscribe((data) => {
      if(data){
        if(product?.id === data.id)
          this.updateProduct(data);
        else
          this.createProduct(data);
      }
    });
  }

  // Edit product 
  // Ref localhost:7186/api/Product/UpdateProduct
  updateProduct(product: IProduct){
    this.productService.updateProduct(product)
      .subscribe((data) => {
        this.products = this.products.map((product) => {
          if(product.id === data.id)
            return data;
          else
            return product;
      });
    });
  }

  // Create product 
  // Ref localhost:7186/api/Product/CreateProduct
  createProduct(data: IProduct){
    this.productService.createProduct(data).subscribe((data) => this.products = data);
  }

  // Find info about product by {id}
  // Ref localhost:7186/api/Product/GetProduct/id
  infoProduct(id: string){
    console.log(id);
    this.productService.getProduct(id).subscribe((data) => { this.product = data });
  }
  
  // Delete product by {id}
  // Ref localhost:7186/api/Product/Delete/id
  deleteProduct(id: string){
    console.log(id);
    this.productService.deleteProduct(id).subscribe((data) => { this.products = data });
  }

  ngAfterViewInit() {
   
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}