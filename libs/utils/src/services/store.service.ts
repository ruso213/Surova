import { Injectable } from '@angular/core';
import { Firestore, collection, query, getDocs } from '@angular/fire/firestore';
import { Product } from '../interfaces/product.interface';
import { Filt } from '../enums';
import { FiltType } from '../interfaces';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly products = new BehaviorSubject<Product[]>([]);
  Products$ = this.products.asObservable()
  private readonly filters = new BehaviorSubject<FiltType[]>([]);
  Filters$ = this.filters.asObservable()
  
  constructor(private readonly db: Firestore) {}

  getProducts() {
    const collectionRef = collection(this.db, 'products');
    const q = query(collectionRef);
    const querySnapshot = getDocs(q);
    querySnapshot.then((i) => {
      const productsList: Product[] = []
      i.forEach((item) => {
        productsList.push(item.data() as Product)
      });
      this.products.next(productsList)
    });
    return querySnapshot;
  }

  getProductWfilter(filter: FiltType[],products:Product[] ) {
    let filterProducts = products
    filter.forEach((item) => {
      switch (item.id) {
        case Filt.RATE:
          filterProducts = filterProducts.filter(
            (i) => i.rating > item.range[0] && i.rating < item.range[1]
          );
          return;
        case Filt.PRICE:
          filterProducts = filterProducts.filter((i) => {
            return i.price > item.range[0] && i.price < item.range[1];
          });
          return;
        case Filt.INsTOCK:
          filterProducts = filterProducts.filter((i) => i.inStock);
          return;
      }
    });
    return filterProducts;
  }
  getProductsWname(name:string, products:Product[]){
    console.log(name,products);
  }
  getOnlyCategoryProducts(category: string){
    const productOfCategory = this.products.getValue().filter(i => i.principalCategory == category)
    return productOfCategory    
  }

  emitFiltersValue(filters:FiltType[]){
    this.filters.next(filters)
  }

  
}
