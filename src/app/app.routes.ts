import { Routes } from '@angular/router';
import { CommonLayoutComponent } from './Ui-Material/common-layout/common-layout.component';
import { ScrollAnimationComponent } from './Ui-Material/animation/scroll-animation/scroll-animation.component';
import { ScrollAnimation2Component } from './Ui-Material/animation/scroll-animation2/scroll-animation2.component';

export const routes: Routes = [
    {
        path:'',
        component:CommonLayoutComponent,
        children:[
            {
                path:'scroll-animation-01',
                component:ScrollAnimationComponent
            },
            {
                path:'scroll-animation-02',
                component:ScrollAnimation2Component
            }
            // {
            //     path:"",
            //     loadChildren: () => import('../app/main-website/home/home.routes').then(r => r.HomeRoutes)
            // },
        ]
    }
];
