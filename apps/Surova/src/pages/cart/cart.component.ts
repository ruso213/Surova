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
  totalPriceCart = 0
  constructor(){
    effect(()=>{
      const productId= this.user.productsInCart()
      this.productsInCart = []
      productId.forEach(item => {
        this.store.getProductByID(item['id']).then(product => {
          if ('price' in product && typeof product['price'] === 'number') {
            this.productsInCart.push({...product,
              quantity:item['quantity'], 
              totalPrice:item['quantity']* product['price'],
              id: item['id'] } as ProductInCart,
            )
            this.totalPriceCart = 0
            this.productsInCart.forEach(i =>this.totalPriceCart = this.totalPriceCart + (i.price*i.quantity ))
          }
        })
      })
        console.log(this.totalPriceCart);
        
    })
  }
  pay(){
    console.log('pay');
    
  }
  deletePr(id:string){
    this.user.deleteToCart(id)
  }

  quantity(evt:{id: string, quantity:'plus'|'less'}){
    this.user.quantityOfProduct(evt)
  }
}
