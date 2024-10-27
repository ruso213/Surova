import { Route } from '@angular/router';
import { StoreComponent } from '../pages/store/store.component';
import { categoryRootGuard } from '@surova/utils';

export const appRoutes: Route[] = [
    {
        path:'home',
        component:StoreComponent,
    },
    {
        path:'category',
        component:StoreComponent,
        canActivate:[categoryRootGuard]
    },
    {
        path: "**",
        pathMatch:'full',
        redirectTo: "home"
    }
];
