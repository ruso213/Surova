import { Injectable } from '@angular/core';
import { Firestore, collection, query, getDocs, where } from '@angular/fire/firestore';
import { Product } from '../interfaces/product.interface';
import { Filt } from '../enums';
import { FiltType } from '../interfaces';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private readonly db: Firestore) {}
  products: Product[] = [];

  getProducts() {
    this.products = [];
    const collectionRef = collection(this.db, 'products');
    const q = query(collectionRef);
    const querySnapshot = getDocs(q);
    querySnapshot.then((i) => {
      i.forEach((item) => {
        this.products.push({ ...(item.data() as Product) });
      });
    });
    return querySnapshot;
  }

  getProductWfilter(filter: FiltType[], products: Product[]) {
    let filterProducts = [...products];    
    
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
          filterProducts = filterProducts.filter((i) => i.inStock == true);
          return;
      }
    });
    return filterProducts;
  }

  getOnlyCategoryProducts(category: string){
    const collectionRef= collection(this.db, 'products')
    const q = query(collectionRef, where('principalCategory', '==', category))
    const querySnapshot = getDocs(q) 
    return querySnapshot
  }
}
