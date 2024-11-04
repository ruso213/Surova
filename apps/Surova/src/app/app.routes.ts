import { Route } from '@angular/router';
import { StoreComponent } from '../pages/store/store.component';
import { categoryRootGuard } from '@surova/utils';
import { StoreProductsComponent } from '../pages/store/components/storeProducts/storeProducts.component';

export const appRoutes: Route[] = [
    {
        path:'store',
        component:StoreComponent,
        children:[
            {
                path:'category',
                component:StoreProductsComponent,
                canActivate:[categoryRootGuard]
            },
            {
                path:'',
                component:StoreProductsComponent,
            }
        ]
    },
    {
        path: "**",
        pathMatch:'full',
        redirectTo: "store"
    }
];
