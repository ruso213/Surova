import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, CarouselComponent, CommentsComponent, GraphComponent, letterDirective, ProductDetailsComponent, ProductTargetComponent, ShowProductImgsComponent } from '@surova/ui';
import { Product } from '@surova/utils';

@Component({
  selector: 'app-buy-product-target',
  standalone: true,
  imports: [CommonModule, 
    ShowProductImgsComponent, 
    ProductDetailsComponent, 
    ButtonComponent, 
    CarouselComponent,
    letterDirective, 
    ProductTargetComponent,
    CommentsComponent,
    GraphComponent
  ],
  templateUrl: './buyProductTarget.component.html',
  styleUrl: './buyProductTarget.component.scss',
})
export class BuyProductTargetComponent {
  product = input<Product>()
  principalImg = ''
  
}
