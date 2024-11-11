import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, FilterListComponent, HeaderComponent, InputComponent,  SliderComponent } from '@surova/ui';
import { MatIconModule } from '@angular/material/icon';
import { Filt, Filters, FiltType, ProductsStore } from '@surova/utils';
import { Router, RouterModule } from '@angular/router';
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
export class StoreComponent {
  formsModule = inject(FormBuilder)
  productsStore = inject(ProductsStore)
  route = inject(Router)
  searchForm = this.formsModule.group({name:''})
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
  toFilt :Pick< FiltType,'price'| 'rating'> = {
    price:this.filters[0].range,
    rating:this.filters[1].range
  }  

  search(){
    const productName =this.searchForm.getRawValue().name
    if(productName){
      this.route.navigate([],{
        queryParams:{name:productName},
        queryParamsHandling:'merge'
      })
    }else{
      this.productsStore.changeFilters({productName:''})
    }
    
  }
  filterFn(evt: Filters){
    if ( evt.id == 0) {
      this.toFilt.rating = evt.range 
    }else if(evt.id == 1){
      this.toFilt.price = evt.range 
    }
  }

  filterProductsFn(){
    this.route.navigate([],{
      queryParams:{
        min$: this.toFilt.price![0], 
        max$:this.toFilt.price![1],
        minRate: this.toFilt.rating![0], 
        maxRate:this.toFilt.rating![1],
      },
      queryParamsHandling:'merge'
    })
  }
}
