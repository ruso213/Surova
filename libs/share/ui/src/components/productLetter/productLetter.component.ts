import { Product } from '@surova/utils';
import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductDetailsComponent } from '../productDetails/productDetails.component';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';


@Component({
  selector: 'lib-product-letter',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent,ButtonComponent],
  templateUrl: './productLetter.component.html',
  styleUrl: './productLetter.component.scss',
})
export class ProductLetterComponent {
  route = inject(Router)
  product = input<Product>()
  buyProduct(){
    this.route.navigate([`product/${this.product()?.id}`])
  }
  
}
