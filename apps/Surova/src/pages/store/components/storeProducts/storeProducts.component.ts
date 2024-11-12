
import { Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltType, ProductsStore} from '@surova/utils';
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
export class StoreProductsComponent implements OnInit {
  productsStore = inject(ProductsStore)
  activatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(i =>{
        const productFilt :FiltType= {
          price:[0,20000],
          principalCategory:'',
          productName:'',
          rating:[0,5]
        }
        if (i['min$'] && i['max$'])productFilt.price = [JSON.parse(i['min$']), JSON.parse(i['max$'])];
        if (i['category']) productFilt.principalCategory = i['category'];
        if (i['minRate'] && i['maxRate']) productFilt.rating = [JSON.parse(i['minRate']), JSON.parse(i['maxRate'])];
        if (i['name']) productFilt.productName = i['name'];
        this.productsStore.changeFilters(productFilt)
      }
    )
  }
  async loadProducts(){
    await this.productsStore.loadData()
  }

  backTo(){
    console.log()
    
  }

  openProduct(evt:string){
    console.log(evt);
  }
}
