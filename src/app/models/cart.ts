import { IProduct } from "./product";


export interface ICart{
    cartId: string;
    product: IProduct;
    amount: number;
    totalPrice?: number;
}