import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent, CustomCheckboxComponent, FilterListComponent, HeaderComponent, InputComponent, ProductLetterComponent, ProductTargetComponent, letterDirective } from '@surova/ui';
import { MatIconModule } from '@angular/material/icon';
import { Product, StoreService } from '@surova/utils';
import { ActivatedRoute } from '@angular/router';

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
    ProductTargetComponent,
    CustomCheckboxComponent,
    FilterListComponent
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent implements OnInit{
  storeService = inject(StoreService)
  activatedRoute = inject(ActivatedRoute)
  products : Product[]=[]
  ngOnInit(): void {
    this.storeService.getProducts().then(()=>{
      this.products = this.storeService.products
    })
    this.activatedRoute.queryParams.subscribe(i => console.log(i))
  }
}