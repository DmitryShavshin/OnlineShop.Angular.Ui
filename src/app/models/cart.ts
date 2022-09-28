import { Injectable } from "@angular/core";
import { ICart } from "./ICart";
import { IProduct } from "./product";

@Injectable()
export class Cart{
    public cart: ICart[] = [];
    
}