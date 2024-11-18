import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@surova/ui';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {}
