import { Product } from '@surova/utils';
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductDetailsComponent } from '../productDetails/productDetails.component';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'lib-product-letter',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent,ButtonComponent],
  templateUrl: './productLetter.component.html',
  styleUrl: './productLetter.component.scss',
})
export class ProductLetterComponent {
    product = input<Product>()
}
