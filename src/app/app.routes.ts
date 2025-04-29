import { Routes } from '@angular/router';
import { CommonLayoutComponent } from './Ui-Material/common-layout/common-layout.component';
import { ScrollAnimationComponent } from './Ui-Material/animation/scroll-animation/scroll-animation.component';

export const routes: Routes = [
    {
        path:'',
        component:CommonLayoutComponent,
        children:[
            {
                path:'',
                component:ScrollAnimationComponent
            }
            // {
            //     path:"",
            //     loadChildren: () => import('../app/main-website/home/home.routes').then(r => r.HomeRoutes)
            // },
        ]
    }
];
