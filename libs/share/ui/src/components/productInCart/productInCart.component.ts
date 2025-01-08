import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@surova/utils';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'lib-product-in-cart',
  standalone: true,
  imports: [CommonModule,MatRipple],
  templateUrl: './productInCart.component.html',
  styleUrl: './productInCart.component.scss',
})
export class ProductInCartComponent {
  product = input<Product>()
  quantityEvt = output<'plus' | 'less'>()
  addGiveMessage(){
    console.log('add');
    
  }

  quantity(param: 'plus'| 'less'){
    this.quantityEvt.emit(param)
  }
}
