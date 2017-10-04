import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'restaurant', loadChildren: './restaurant/restaurant.module#RestaurantModule' },
            { path: 'platillo', loadChildren: './platillo/platillo.module#PlatilloModule' },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }

export const routedComponents = [PagesComponent];
