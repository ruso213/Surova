import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, CarouselComponent, CustomCheckboxComponent, FilterListComponent, HeaderComponent, InputComponent, ProductLetterComponent, ProductTargetComponent, SliderComponent, letterDirective } from '@surova/ui';
import { MatIconModule } from '@angular/material/icon';
import { Filt, Filters, FiltType, Product, StoreService } from '@surova/utils';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

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
    FilterListComponent,
    SliderComponent,
    ButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent implements OnInit{
  formsModule = inject(FormBuilder)
  storeService = inject(StoreService)
  activatedRoute = inject(ActivatedRoute)
  carouselProducts : Product[]= []
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
    this.activatedRoute.queryParams.subscribe(params => {
      this.storeProducts =[]
      if (params[0]) {
        this.storeService.getOnlyCategoryProducts(params[0]).then(i =>i.forEach(product => {
          this.storeProducts.push(product.data() as Product)
        }) )
        this.storeService.getProducts().then(()=>{
          this.carouselProducts = this.storeService.products
        })
      }else{
        this.storeService.getProducts().then(()=>{
          this.storeProducts = this.storeService.products
          this.carouselProducts = this.storeService.products
        })
      }
    })
  }


  filterFn(evt: Filters){
    const isIn = this.toFilt.findIndex((i:FiltType) => i.id == evt.id)
    if (isIn === -1) {
      this.toFilt.push(evt)
    }
  }

  filterProducts(){
    const productsToFilt :Product[]= []
    this.storeProducts.forEach(i => productsToFilt.push(i))
    this.storeProducts=  this.storeService.getProductWfilter(this.toFilt, productsToFilt)
    console.log(this.storeProducts);
    
  }
}
