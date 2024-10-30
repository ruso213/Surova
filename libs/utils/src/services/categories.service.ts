import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private readonly db: Firestore) {}
  subCategories =[]
  async getProductCategories(){
    const collectionRef = collection(this.db, 'products');
    const snapshot = await getDocs(collectionRef);
    
    const snapshotResponse= snapshot.docs.map(doc => {
      return doc.data()['principalCategory']
    });
    const categoryList = [...new Set(snapshotResponse)]
    return categoryList
  }

}
