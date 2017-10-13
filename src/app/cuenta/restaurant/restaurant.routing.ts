import { RestaurantCreateComponent } from './components/restaurant-create/restaurant-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantComponent } from './restaurant.component';

const routes: Routes = [
    {
        path: '',
        component: RestaurantComponent,
        children: [
            { path: 'crear', component: RestaurantCreateComponent },
            { path: 'editar', component: RestaurantCreateComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantRoutingModule { }

export const routedComponents = [RestaurantComponent];
