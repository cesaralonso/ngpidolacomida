import { RestaurantContainerComponent } from './components/restaurant-container/restaurant-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantComponent } from './restaurant.component';

const routes: Routes = [
    {
        path: '',
        component: RestaurantComponent,
        children: [
            { path: 'perfil', component: RestaurantContainerComponent}
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantRoutingModule { }

export const routedComponents = [RestaurantComponent];
