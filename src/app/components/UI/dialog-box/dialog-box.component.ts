import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if(this.data)
      this.isNew = false;
  }

  isNew: boolean = true;
  
  productForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? crypto.randomUUID()), 
    name: new FormControl(this.data?.name ?? ''),
    title: new FormControl(this.data?.title ?? ''), 
    imgUrl: new FormControl(this.data?.imgUrl ?? ''), 
    description: new FormControl(this.data?.description ?? ''), 
    price: new FormControl(this.data?.price ?? ''),
    brandId: new FormControl(this.data?.brandId ?? '')
  });

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit(){
    this.data = {
      id: this.productForm.value.id,
      name: this.productForm.value.name,
      title: this.productForm.value.title,
      price: this.productForm.value.price,
      imgUrl: "empty",
      description: this.productForm.value.description,
      brandId: "4b40b766-f054-455d-be9d-30f22a80b48c"
    };
    console.log(this.data)
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
  }
}
