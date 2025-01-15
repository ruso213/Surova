import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInCartComponent } from '@surova/ui';
import { User } from '../../utils/store/user.store';
import { StoreService,ProductInCart } from '@surova/utils';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ProductInCartComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  user = inject(User)
  store= inject(StoreService)
  productsInCart:ProductInCart[] =[]
  constructor(){
    effect(()=>{
      const productId= this.user.productsInCart()
      this.productsInCart = []
      productId.forEach(item => {
        this.store.getProductByID(item['id']).then(product => {
          this.productsInCart.push({...product,
            quantity:item['quantity'], 
            id: item['id'] } as ProductInCart
          )})
        })
    })
  }

  deletePr(id:string){
    this.user.deleteToCart(id)
  }

  quantity(evt:{id: string, quantity:'plus'|'less'}){
    this.user.quantityOfProduct(evt)
  }
}
