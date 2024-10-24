import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaracteristicComponent, CarouselComponent, CustomCheckboxComponent, HeaderComponent, InputComponent, ProductLetterComponent, ProductTargetComponent, letterDirective } from '@surova/ui';
import { MatIconModule } from '@angular/material/icon';
import { Tags, Product, StoreService } from '@surova/utils';
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
    CaracteristicComponent,
    ReactiveFormsModule,
    CustomCheckboxComponent
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent implements OnInit{
  ngOnInit(): void {
    this.storeService.getProducts().then(()=>{
      this.products = this.storeService.products
    })
    this.caractericsForm.controls.caracteristicas.valueChanges.subscribe(i => console.log(i))
      
  }
  formBuilder = inject(FormBuilder)
  storeService = inject(StoreService)

  filterList: string[]=[]
  caracteristic: Tags= {
      caracteristicnNme:'ropa',
      caracteristics:[
        {
          name:'Size',
          options:['xs','md','lg','xl']
        },
        {
          name:'Color',
          options:['Roja','Verde','Azul','Gris']
        },
        {
          name:'style',
          options:['oversize','skinny']
        },
      ]
    }
  products : Product[]=[]
  caractericsForm =this.formBuilder.group({
    caracteristicas:[''],
    caracteristica:['']
  })

  filter(option: string){
    const index = this.filterList.findIndex(i=>i==option)
    if (index != -1) {
      this.filterList.splice(index,1)
    }else{
      this.filterList.push(option)
    }
    
    console.log(this.filterList);
    
  }
}