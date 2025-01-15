import { Component, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInCart } from '@surova/utils';
import { MatRipple } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';

interface EmitedValue{
  quantity: 'less' |'plus',
  id: string
}
@Component({
  selector: 'lib-product-in-cart',
  standalone: true,
  imports: [CommonModule,MatRipple, MatIcon],
  templateUrl: './productInCart.component.html',
  styleUrl: './productInCart.component.scss',
})

export class ProductInCartComponent implements OnInit{
  product = input<ProductInCart>()
  quantityEvt = output<EmitedValue>()
  deletePr = output<string>()
  quantity = 0
  totalPrice =0
  ngOnInit(): void {
    this.quantity = this.product()?.quantity as number
    this.totalPrice = this.product()?.price as number * this.quantity
  }
  
  addGiveMessage(){
    console.log('add');
  }

  deleteProduct(){
    this.deletePr.emit(this.product()?.id as string)
  }

  emitQuantity(param: 'plus'| 'less'){
    this.quantityEvt.emit({
      id:this.product()?.id as string,
      quantity:param
    })
    if (param == 'plus') {
      this.quantity++
    }else if(param == 'less' && this.quantity >1){
      this.quantity--
    }
    this.totalPrice = this.product()?.price as number * this.quantity
  }
}
