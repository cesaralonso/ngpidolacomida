import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantAllComponent } from './components/restaurant-all/restaurant-all.component';
import { RestaurantEditComponent } from './components/restaurant-edit/restaurant-edit.component';
import { RestaurantCreateComponent } from './components/restaurant-create/restaurant-create.component';
import { RestaurantCuentaComponent } from './restaurant-cuenta.component';
import { RestaurantShowComponent } from './components/restaurant-show/restaurant-show.component';

const routes: Routes = [
    {
        path: '',
        component: RestaurantCuentaComponent,
        children: [
            { path: 'mis-restaurantes', component: RestaurantAllComponent },
            { path: 'crear', component: RestaurantCreateComponent },
            { path: 'editar/:id', component: RestaurantEditComponent },
            { path: 'ver/:id', component: RestaurantShowComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantCuentaRoutingModule { }

export const routedComponents = [RestaurantCuentaComponent];
