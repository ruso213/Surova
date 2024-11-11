import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent, letterDirective, ProductLetterComponent } from '@surova/ui';
import { ProductsStore, } from '@surova/utils';


@Component({
  selector: 'app-carouserl-products',
  standalone: true,
  imports: [CommonModule, CarouselComponent,ProductLetterComponent,     letterDirective  ],
  templateUrl: './carouserlProducts.component.html',
  styleUrl: './carouserlProducts.component.scss',
})
export class CarouserlProductsComponent {
  productsStore = inject(ProductsStore)

}
