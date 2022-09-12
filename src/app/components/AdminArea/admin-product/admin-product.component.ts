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
  displayedColumns: string[] = ['id', 'name', 'title', 'price', 'create'];
  productSubscription?: Subscription;
  products: IProduct[] = [];
  product?: IProduct;
  dataSource!: MatTableDataSource<IProduct>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(this.products);
  }

  ngOnInit(): void {
    this.productSubscription = this.productService
    .getProducts()
    .subscribe(( data: IProduct[] ) => 
    {
      this.products = data;
    });
  }

  ngOnDestroy(){
    if(this.productSubscription)
      this.productSubscription.unsubscribe();
  }

  openDialog(): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(DialogBoxComponent);
    dialogRef.afterClosed().subscribe((data) => this.postData(data));
  }

  postData(data: IProduct){
    console.log(data)
    this.productService
      .createProduct(data)
      .subscribe((data) => this.products = data);
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

  infoProduct(id: string){
    console.log(id);
    this.productSubscription = this.productService
      .getProduct(id)
      .subscribe((data) => { this.product = data });
  }
  
  deleteProduct(id: string){
    console.log(id);
    this.productService
      .deleteProduct(id)
      .subscribe((data) => { this.products = data });
  }

  editProduct(product: IProduct){
    console.log(product);
  }
}