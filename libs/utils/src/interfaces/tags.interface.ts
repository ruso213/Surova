import { Filt } from "../enums";


export interface Filters{
    id:Filt
    text?:string
    range:number[];
    step?:number;
}


export interface FiltType{
    id:Filt
    range:number[];
}

