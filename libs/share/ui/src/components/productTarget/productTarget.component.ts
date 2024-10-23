import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@surova/utils';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'lib-product-target',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './productTarget.component.html',
  styleUrl: './productTarget.component.scss',
})
export class ProductTargetComponent {
  product = input<Product>()
}
