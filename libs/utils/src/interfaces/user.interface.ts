import { Product } from "./product.interface"

export interface ProductInCart extends Product{
    quantity: number
    giftMessage:string
    totalPrice:number
}

