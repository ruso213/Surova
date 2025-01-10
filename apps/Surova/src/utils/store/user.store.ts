
import { computed, inject } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";

interface ProductsInCart{
    id:string,
    quantity:number
}

const initialState = {
    user:'',
    productsInCart : []
}
function addToLocalStorage(id:string, auth: Auth){
    if (auth.currentUser) {
        console.log('esta logeado ponle el producto ', id);
    }else{
        const storageCart=localStorage.getItem('cart')
        console.log(storageCart);
        if(storageCart){
            const localStorageCart:ProductsInCart[] = JSON.parse(storageCart)
            if (localStorageCart) {
            const isInCart = localStorageCart.find(i => i.id == id)
            if (!isInCart) {
                localStorageCart.push({id,quantity:1})
                localStorage.setItem('cart', JSON.stringify(localStorageCart))
            }
          }else{
            localStorage.setItem('cart',JSON.stringify([{
                id,
                quantity:1
            }]))
          }
          console.log(JSON.parse(storageCart));
          
          return JSON.parse(storageCart)
        }else{
            localStorage.setItem('cart',JSON.stringify([{id,quantity:1}]))
            
        }
      }

}
export const User = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store, auth = inject(Auth)) =>({
        addToCart(id:string){
            patchState(store, {productsInCart:addToLocalStorage(id, auth)})
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
        },
        quantityOfProduct(evt:{id: string, quantity:'plus'|'less'}){
            console.log(evt.id);
            const cart: ProductsInCart[] =store.productsInCart() 
            const product = cart.find(i => i['id'] == evt.id)
            if (!product?.quantity) {
                return
            }
            if (evt.quantity == 'plus') {
                product.quantity++
            }else if(evt.quantity == 'less' && product.quantity >1){
                product.quantity-- 
            }
            localStorage.setItem('cart', JSON.stringify( store.productsInCart()))   
        },
    })),
    withComputed((state) =>({
        showCartLength: computed(()=>{
            return state.productsInCart.length
        })
    }))
)