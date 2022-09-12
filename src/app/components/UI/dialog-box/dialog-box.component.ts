import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(''), 
    name: new FormControl(''),
    title: new FormControl(''), 
    imgUrl: new FormControl(''), 
    description: new FormControl(''), 
    price: new FormControl(''),
    brandId: new FormControl('')
  });
  

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCreate(){
    this.data = {
      name: this.productForm.value.name,
      title: this.productForm.value.title,
      price: this.productForm.value.price,
      imgUrl: "empty",
      description: this.productForm.value.description,
      brandId: "4b40b766-f054-455d-be9d-30f22a80b48c"
    };
    this.dialogRef.close(this.data);
  }

  onSubmit(){
    console.log(this.productForm);
  }

  ngOnInit(): void {
  }

}
