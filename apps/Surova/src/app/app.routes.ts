import { Route } from '@angular/router';
import { StoreComponent } from '../pages/store/store.component';
import { ProductComponent } from '../pages/product/product.component';
import { CartComponent } from '../pages/cart/cart.component';


export const appRoutes: Route[] = [
    {
        path:'store',
        component:StoreComponent,
    },
    {
        path:'product/:id',
        component:ProductComponent
    },
    {
        path:'cart',
        component:CartComponent
    },
    {
        path: "**",
        pathMatch:'full',
        redirectTo: "store"
    }
];
