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
  storeService = inject(StoreService)
  activatedRoute= inject(ActivatedRoute)
  storeProducts : Product[]=[]
  load = false
  ngOnInit(): void {
    this.storeService.Products$.subscribe(products => {
      this.activatedRoute.queryParams.subscribe(i => {
        if (i[0]) {
          this.storeService.addFilters({principalCategory:i[0]})
          this.storeProducts= this.storeService.getProductWfilter()
          this.load = true
        }
        else {
          this.storeProducts = products
          this.storeService.filterProducts = [...this.storeProducts]
          this.load = true
        }
      })
    })

    
  }

  backTo(){
    this.storeService.deleteFilters()
    
  }
}
