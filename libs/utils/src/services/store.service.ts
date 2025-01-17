import { Injectable } from '@angular/core';
import { Firestore, collection, query, getDocs, getDoc, doc, where } from '@angular/fire/firestore';
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
      const collectionRef = collection(this.db, 'products')
      const q= query(collectionRef, where('principalCategory', '==', querySnapshot.data()['principalCategory']))
      const queryCollectionSnapshot = await getDocs(q)
      const relatedProducts:Product[] = []
      queryCollectionSnapshot.forEach(i => relatedProducts.push({...i.data() as Product,
        id:i.id
      })) 
      return {...querySnapshot.data(),
        relatedProducts,
      }
    }else{
      return {...querySnapshot.data()}
    }
  }
  
}
