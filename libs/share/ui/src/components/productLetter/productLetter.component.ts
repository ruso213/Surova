import { Product } from '@surova/utils';
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';


@Component({
  selector: 'lib-product-letter',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './productLetter.component.html',
  styleUrl: './productLetter.component.scss',
})
export class ProductLetterComponent {
    product = input<Product>()

}
