import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent, HeaderComponent, InputComponent, ProductLetterComponent, ProductTargetComponent, letterDirective } from '@surova/ui';
import { MatIconModule } from '@angular/material/icon';
import { Product, StoreService } from '@surova/utils';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    CommonModule, 
    CarouselComponent,
    letterDirective,
    ProductLetterComponent,
    HeaderComponent, 
    InputComponent,
    MatIconModule,
    ProductTargetComponent
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent implements OnInit{
  constructor(
    private storeService :StoreService
  ){}

  products : Product[]=[]
  ngOnInit(): void {
    this.storeService.getProducts().then(()=>{
      this.products = this.storeService.products
    })
      
  }
}
