import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})


export class AdminLayoutComponent implements OnInit {
  
  constructor(private productService: ProductService) { 
    this.dataSource = new MatTableDataSource(this.products);
  }
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  productSubscription?: Subscription;
  products: IProduct[] = [];
  dataSource: MatTableDataSource<IProduct>;
  ifUserAdmin: boolean = true;

  ngOnInit(): void {
    this.ifUserAdmin = true;
  } 
}
