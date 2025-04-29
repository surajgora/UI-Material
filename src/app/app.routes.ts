import { Routes } from '@angular/router';
import { CommonLayoutComponent } from './Ui-Material/common-layout/common-layout.component';

export const routes: Routes = [
    {
        path:'',
        component:CommonLayoutComponent,
        children:[
            // {
            //     path:"",
            //     loadChildren: () => import('../app/main-website/home/home.routes').then(r => r.HomeRoutes)
            // },
        ]
    }
];
