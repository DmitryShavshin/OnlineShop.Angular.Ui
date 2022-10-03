import { IBrand } from "./brand";
import { ICategory } from "./category";

export interface IProduct{
    id: string; 
    name: string;
    title: string;
    imgUrl: string;
    description: string;
    price: number;
    brandId?: string;
    brand: IBrand;
    categoryProducts: ICategoryProducts[];
}


export interface ICategoryProducts{
    category: ICategory;
}