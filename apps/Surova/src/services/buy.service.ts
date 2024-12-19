import { Injectable, inject } from '@angular/core';
import { StoreService } from '@surova/utils';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
  private readonly storeService = inject(StoreService)
  addToCart(productID:string){
    const product = this.storeService.getProductByID(productID)
    console.log(product);
  }
}
