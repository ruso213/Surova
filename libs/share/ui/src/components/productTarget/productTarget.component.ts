import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@surova/utils';
import { RatingComponent } from '../rating/rating.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'lib-product-target',
  standalone: true,
  imports: [CommonModule, RatingComponent, ButtonComponent],
  templateUrl: './productTarget.component.html',
  styleUrl: './productTarget.component.scss',
})
export class ProductTargetComponent {
  product = input<Product>()
  openProductEmitter = output<string>()

  clickBuy(){
    const productId = this.product()?.id
    if (productId) this.openProductEmitter.emit(productId)
  }
}
