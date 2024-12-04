import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@surova/utils';
import { RatingComponent } from '../rating/rating.component';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-product-target',
  standalone: true,
  imports: [CommonModule, RatingComponent, ButtonComponent],
  templateUrl: './productTarget.component.html',
  styleUrl: './productTarget.component.scss',
})
export class ProductTargetComponent {
  product = input<Product>()
  route = inject(Router)
  buyProduct(){
    this.route.navigate([`product/${this.product()?.id}`])
  }
}
