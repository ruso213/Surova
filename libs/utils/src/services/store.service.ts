import { Injectable } from '@angular/core';
import { Firestore, collection, query, getDocs } from '@angular/fire/firestore';
import { Product } from '../interfaces/product.interface';

import {  FiltType } from '../interfaces';
import { BehaviorSubject, filter, } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private readonly products = new BehaviorSubject<Product[]>([]);
  Products$ = this.products.asObservable()
  filters:FiltType = {productName:'',price:undefined,principalCategory:'',rating:undefined}
  filterProducts : Product[]=[]

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

  }

  getProductWfilter() {
    this.filterProducts = []
    const price = this.filters?.price?.[0] ?? 0;
    const filterProducts = this.products.getValue()
    .filter(i => 
      i.principalCategory == this.filters.principalCategory && 
      i.price > (price)&& i.price < (this.filters.price![1] ?? 20000) &&
      i.rating > (this.filters.rating![0] ?? 0) && i.rating < (this.filters.rating![1] ?? 5) &&
      i.productName.includes(this.filters.productName)
    )
    this.filterProducts.push(...filterProducts)
    console.log(this.filterProducts);
    
    return this.filterProducts;
  }


  addFilters(filter:Partial<FiltType>){
    this.filters = {
      price: filter.price,      
      rating:filter.rating,
      principalCategory: filter.principalCategory as string,
      productName:filter.principalCategory as string 
    } 
    console.log(this.filters);
    
  }

  deleteFilters(){
    this.filters = {
      productName:'',
      price:undefined,
      principalCategory:'',
      rating:undefined
    }
  }
}
