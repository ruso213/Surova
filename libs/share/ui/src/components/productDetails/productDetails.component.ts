import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@surova/utils';
import { RatingComponent } from '../rating/rating.component';


@Component({
  selector: 'lib-product-details',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './productDetails.component.html',
  styleUrl: './productDetails.component.scss',
})
export class ProductDetailsComponent {
  product = input<Product>()
 
}
