import { computed, inject } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";

const initialState = {
    productsInCart : []
}
function addToLocalStorage(productID:string, auth: Auth){
    if (auth.currentUser) {
        console.log('esta logeado ponle el producto ', productID);

    }else{
        const storageCart=localStorage.getItem('cart')
        if(storageCart){
            const localStorageCart:string[] = JSON.parse(storageCart)
            if (localStorageCart) {
            const isInCart = localStorageCart.find(i => i == productID)
            if (!isInCart) {
                localStorageCart.push(productID)
                localStorage.setItem('cart', JSON.stringify(localStorageCart))
            }
          }else{
            localStorage.setItem('cart',JSON.stringify([productID]))
          }
          return JSON.parse(storageCart)
        }
      }
}
export const Cart = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store, auth = inject(Auth)) =>({
        addToCart(productID:string){
            patchState(store, {productsInCart:addToLocalStorage(productID, auth)})
            return store.productsInCart()
        },
        loadCart(){
            const localStorageCart = localStorage.getItem('cart')
            if (localStorageCart) {
                patchState(store,{productsInCart:JSON.parse(localStorageCart)})
                
            }else{
                console.log('cargar desde firebase');
            }
            return store.productsInCart()
        }
    })),
    withComputed((state) =>({
        showCartLength: computed(()=>{
            return state.productsInCart.length
        })
    }))
)