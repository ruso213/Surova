import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInCartComponent } from '@surova/ui';
import { Cart } from '../../utils/store/cart.store';
import { Product, StoreService } from '@surova/utils';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ProductInCartComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cart = inject(Cart)
  store= inject(StoreService)
  productsInCart:Product[] =[]
  constructor(){
    effect(()=>{
      const productId= this.cart.productsInCart()
      productId.forEach(id => {
        this.store.getProductByID(id).then(product => this.productsInCart.push(product as Product))
      })
    })
  }
}
