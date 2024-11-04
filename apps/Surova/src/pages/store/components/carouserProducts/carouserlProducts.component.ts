import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent, letterDirective, ProductLetterComponent } from '@surova/ui';
import { Product, StoreService } from '@surova/utils';

@Component({
  selector: 'app-carouserl-products',
  standalone: true,
  imports: [CommonModule, CarouselComponent,ProductLetterComponent,     letterDirective  ],
  templateUrl: './carouserlProducts.component.html',
  styleUrl: './carouserlProducts.component.scss',
})
export class CarouserlProductsComponent implements OnInit {
  storeService = inject(StoreService)
  carouselProducts : Product[]= []

  ngOnInit(): void {
    this.storeService.Products$.subscribe(products => this.carouselProducts = products)
  }

}
