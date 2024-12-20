import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Cart } from '../store/cart.store';


@Injectable({
  providedIn: 'root'
})
export class BuyService {
  auth = inject(Auth)
  cartStore = inject(Cart)
  
}
