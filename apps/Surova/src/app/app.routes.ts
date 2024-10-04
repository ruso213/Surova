import { Route } from '@angular/router';
import { StoreComponent } from '../pages/store/store.component';

export const appRoutes: Route[] = [
    {
        path:'',
        component:StoreComponent
    },
    {
        path: "**",
        pathMatch:'full',
        redirectTo: ""
    }
];
