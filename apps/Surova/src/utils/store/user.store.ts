import { computed, inject } from "@angular/core";
import { Auth } from "@angular/fire/auth";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";

interface ProductsInCart{
    id:string,
    quantity:number
}
interface InitialState{
    user:'',
    productsInCart : ProductsInCart[]
}
const initialState:InitialState = {
    user:'',
    productsInCart : []
}
function addToLocalStorage(id:string, auth: Auth){
    if (auth.currentUser) {
        console.log('esta logeado ponle el producto ', id);
    }else{
        console.log('addToLocalStorage');
        const storageCart=localStorage.getItem('cart')
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
          

          return JSON.parse(localStorage.getItem('cart')!)
        }else{
            localStorage.setItem('cart',JSON.stringify([{id,quantity:1}]))
            
        }
      }

}

function deleteToLocalStorage(id:string, auth:Auth){
    if(auth.currentUser){
        console.log('elimina el producto de firebase');
        return []
    }else{
        const productsOfLocalStorage = JSON.parse(localStorage.getItem('cart') as string) as ProductsInCart[]
        const update :ProductsInCart[] = productsOfLocalStorage.filter(i => i.id != id)
        localStorage.setItem('cart', JSON.stringify(update))
        return update
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
        deleteToCart(id:string){
            patchState(store, {productsInCart:deleteToLocalStorage(id, auth)})
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
            const cart: ProductsInCart[] =store.productsInCart() 
            const product = cart.find(i => i['id'] == evt.id)
            if (!product?.quantity) {
                return
            }
            if (evt.quantity == 'plus') {
                product.quantity++
                localStorage.setItem('cart', JSON.stringify( store.productsInCart()))  
                const localStorageCart = localStorage.getItem('cart')
                if(localStorageCart)
                patchState(store,{productsInCart:JSON.parse(localStorageCart)})
            }else if(evt.quantity == 'less' && product.quantity >1){
                product.quantity-- 
                localStorage.setItem('cart', JSON.stringify( store.productsInCart()))  
                const localStorageCart = localStorage.getItem('cart')
                if(localStorageCart)
                patchState(store,{productsInCart:JSON.parse(localStorageCart)})
            }
        },
    })),
    withComputed((state) =>({
        showCartLength: computed(()=>{
            return state.productsInCart.length
        })
    }))
)