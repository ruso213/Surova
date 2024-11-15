import { Filt } from "../enums";
import { Product } from "./product.interface";


export interface FiltersSlider{
    formId?:string
    id:Filt
    text?:string
    range:number[];
    step?:number;
}


export interface FiltType extends Pick<Product, 'principalCategory'| 'productName'>{
    price:number[]| undefined;
    rating:number[] | undefined;
}

