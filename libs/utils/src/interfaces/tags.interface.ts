import { Filt } from "../enums";
import { Product } from "./product.interface";


export interface Filters{
    id:Filt
    text?:string
    range:number[];
    step?:number;
}


export interface FiltType extends Pick<Product, 'principalCategory'| 'productName'>{
    price:number[]| undefined;
    rating:number[] | undefined;
}

