import { Injectable } from '@angular/core';
import { Firestore, collection,query,getDocs } from '@angular/fire/firestore';
import { Product } from '../interfaces/product.interface';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private readonly db: Firestore) {}
  products: Product[]=[]
  category =[]
  getProducts(){
    this.products = []
    const collectionRef = collection(this.db, 'products');
    const q = query(collectionRef)
    const querySnapshot = getDocs(q)
    querySnapshot.then(i => {
      i.forEach(item => {        
        this.products.push({...item.data() as Product})        
      })
    }) 
    return querySnapshot
  }


}