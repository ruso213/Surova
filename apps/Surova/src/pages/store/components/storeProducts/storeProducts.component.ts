import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, StoreService } from '@surova/utils';
import { LoadingComponent, NoFindProductsComponent, ProductTargetComponent } from '@surova/ui';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-products',
  standalone: true,
  imports: [
    CommonModule,
    NoFindProductsComponent,
    LoadingComponent,
    ProductTargetComponent
  ],
  templateUrl: './storeProducts.component.html',
  styleUrl: './storeProducts.component.scss',
})
export class StoreProductsComponent implements OnInit{
  filterProducts : Product[]=[]
  storeService = inject(StoreService)
  activatedRoute= inject(ActivatedRoute)
  storeProducts : Product[]=[]
  load = false
  ngOnInit(): void {
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

    this.storeService.Filters$.subscribe(i => {
      this.load = false
      this.filterProducts = []
      this.storeProducts.forEach(i => this.filterProducts.push(i))
      this.filterProducts=  this.storeService.getProductWfilter(i, this.filterProducts)    
      this.load= true
    })
  }
}
