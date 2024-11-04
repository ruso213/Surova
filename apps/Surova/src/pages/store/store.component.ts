import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, CustomCheckboxComponent, FilterListComponent, HeaderComponent, InputComponent,  SliderComponent } from '@surova/ui';
import { MatIconModule } from '@angular/material/icon';
import { Filt, Filters, FiltType, StoreService } from '@surova/utils';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CarouserlProductsComponent } from './components/carouserProducts/carouserlProducts.component';
import { StoreProductsComponent } from './components/storeProducts/storeProducts.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    CommonModule, 
    CarouserlProductsComponent,
    HeaderComponent, 
    InputComponent,
    MatIconModule,
    CustomCheckboxComponent,
    FilterListComponent,
    SliderComponent,
    StoreProductsComponent,
    ButtonComponent,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent implements OnInit{
  formsModule = inject(FormBuilder)
  storeService = inject(StoreService)
  router = inject(Router)
  searchForm = this.formsModule.group({name:''})
  toFilt:FiltType[] = []
  filters:Filters[] = [
    {
      id:Filt.PRICE,
      text:'Precio',
      range: [0,20000],
      step:200
    },
    {
      id:Filt.RATE,
      text:'Rating',
      range: [0,5],
    },
  ]
  ngOnInit(): void {
    this.storeService.getProducts()
    
  }

  search(){
    console.log(this.searchForm.getRawValue().name);
    
  }
  filterFn(evt: Filters){
    const isIn = this.toFilt.findIndex((i:FiltType) => i.id == evt.id)
    if (isIn === -1) {
      this.toFilt.push(evt)
    }

  }

  filterProductsFn(){
    this.storeService.emitFiltersValue(this.toFilt)
  }
}
