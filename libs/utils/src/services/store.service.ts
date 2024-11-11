import { Injectable } from '@angular/core';
import { Firestore, collection, query, getDocs } from '@angular/fire/firestore';
import { Product } from '../interfaces/product.interface';


@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private readonly db: Firestore) {}

  async getProducts()  {
    const collectionRef = collection(this.db, 'products');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const productsList: Product[] = []
    querySnapshot.forEach(i => productsList.push(i.data() as Product))
    return productsList
  }

  
}
