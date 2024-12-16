import { Injectable } from '@angular/core';
import { Firestore, collection, query, getDocs, getDoc, doc } from '@angular/fire/firestore';
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
    querySnapshot.forEach(i => {
      productsList.push({
        ...i.data(),
        id:i.id
      } as Product)
    })
    return productsList
  }

  async getProductByID(id:string){
    const docRef = doc(this.db, 'products',id);
    const querySnapshot = await getDoc(docRef);
    if (querySnapshot.exists()) {
      console.log(querySnapshot.data()['reviews']);
      
      return querySnapshot.data()
    }else{
      return false
    }
  }
  
}
