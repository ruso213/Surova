import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, CustomCheckboxComponent, FilterListComponent, HeaderComponent, InputComponent, LoadingComponent, NoFindProductsComponent, ProductTargetComponent, SliderComponent } from '@surova/ui';
import { MatIconModule } from '@angular/material/icon';
import { Filt, Filters, FiltType, Product, StoreService } from '@surova/utils';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CarouserlProductsComponent } from './carouserProducts/carouserlProducts.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    CommonModule, 
    CarouserlProductsComponent,
    HeaderComponent, 
    InputComponent,
    MatIconModule,
    ProductTargetComponent,
    CustomCheckboxComponent,
    FilterListComponent,
    LoadingComponent,
    SliderComponent,
    ButtonComponent,
    NoFindProductsComponent,
    ReactiveFormsModule
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent implements OnInit{
  formsModule = inject(FormBuilder)
  storeService = inject(StoreService)
  activatedRoute = inject(ActivatedRoute)
  load = false
  filterProducts : Product[]=[]
  storeProducts : Product[]=[]
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
    this.storeService.Products$.subscribe(products => {
      this.activatedRoute.queryParams.subscribe(i => {
        if (i[0]) {
          this.storeProducts= this.storeService.getOnlyCategoryProducts(i[0])
          this.filterProducts = [...this.storeProducts]
          this.load = true

        }
        else {
          this.storeProducts = products
          this.filterProducts = [...this.storeProducts]
          this.load = true
        }
      })
    })
  }


  filterFn(evt: Filters){
    const isIn = this.toFilt.findIndex((i:FiltType) => i.id == evt.id)
    if (isIn === -1) {
      this.toFilt.push(evt)
    }
  }

  filterProductsFn(){
    this.load = false
    this.filterProducts = []
    this.storeProducts.forEach(i => this.filterProducts.push(i))
    this.filterProducts=  this.storeService.getProductWfilter(this.toFilt, this.filterProducts)    
    this.load= true

    
  }
}
