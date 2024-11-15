import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, FilterListComponent, HeaderComponent, InputComponent,  SliderComponent } from '@surova/ui';
import { MatIconModule } from '@angular/material/icon';
import { Filt, FiltersSlider, ProductsStore } from '@surova/utils';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CarouserlProductsComponent } from './components/carouserProducts/carouserlProducts.component';
import { StoreProductsComponent } from "./components/storeProducts/storeProducts.component";


@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    CommonModule,
    CarouserlProductsComponent,
    HeaderComponent,
    InputComponent,
    MatIconModule,
    FilterListComponent,
    SliderComponent,
    ButtonComponent,
    ReactiveFormsModule,
    RouterModule,
    StoreProductsComponent
],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent implements OnInit{
  formsModule = inject(FormBuilder)
  productsStore = inject(ProductsStore)
  route = inject(Router)
  activatedRoute = inject(ActivatedRoute)
  filtersForm = this.formsModule.group({
    name:'',
    price:[[0,20000]],
    rate:[[0,5]],
  })
  filters:FiltersSlider[] = [
    {
      id:Filt.PRICE,
      text:'Precio',
      range: [0,20000],
      step:200,
      formId:'price'
    },
    {
      id:Filt.RATE,
      text:'Rating',
      range: [0,5],
      formId:'rate'
    },
  ]
  
ngOnInit(): void {
  this.activatedRoute.queryParams.subscribe( i => {
    const priceRange = [i['min$'],i['max$']]
    const rateRange = [i['minRate'],i['maxRate']]
    this.filtersForm.get('price')?.setValue(priceRange)
    this.filtersForm.get('rate')?.setValue(rateRange)

    this.filtersForm.valueChanges.subscribe(i => console.log(i))
  })
}

  search(){
    const productName =this.filtersForm.getRawValue().name
    if(productName){
      this.route.navigate([],{
        queryParams:{name:productName},
        queryParamsHandling:'merge'
      })
    }else{
      this.productsStore.changeFilters({productName:''})
    }
  }

  filterProductsFn(){
    const priceRange = this.filtersForm.value.price
    const rateRange = this.filtersForm.value.rate
    if (priceRange && rateRange) {
      this.route.navigate([],{
        queryParams:{
          min$: priceRange[0], 
          max$:priceRange[1],
          minRate: rateRange[0], 
          maxRate:rateRange[1],
        },
        queryParamsHandling:'merge'
      })
    }
  }
}
