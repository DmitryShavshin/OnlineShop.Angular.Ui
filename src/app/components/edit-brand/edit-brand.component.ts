import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBrand } from 'src/app/models/brand';
import { BrandSevice } from 'src/app/services/brand.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {
  @Input() product?: IBrand;
  @Output() productsUpdated = new EventEmitter<IBrand[]>();
  constructor(private brandService: BrandSevice) { }



  ngOnInit(): void {
  }

}
