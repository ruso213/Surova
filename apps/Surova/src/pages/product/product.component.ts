import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, HeaderComponent, ProductDetailsComponent, SelectImageComponent } from '@surova/ui';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, 
    HeaderComponent, 
    SelectImageComponent, 
    ProductDetailsComponent,
    ButtonComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdq8SWQqtqxSFCsFEOPxd1qwYj5uyre3Big&s
  img ='https://static.pullandbear.net/assets/public/78fe/0e2e/aa924ba5bae3/3b4a558707a0/03244529826-A6M/03244529826-A6M.jpg?ts=1719505093620&w=1082&f=auto'
}
