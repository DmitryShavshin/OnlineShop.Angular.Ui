

export interface ICart{
    cartId: string;
    productId: string;
    product: IProduct;
    amount: number;
}

export interface IProduct{
    id?: string; 
    name: string;
    title: string;
    imgUrl: string;
    description: string;
    price: number;
    brandId?: string;
}