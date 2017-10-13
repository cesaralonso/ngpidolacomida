import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaComponent } from './cuenta.component';

const routes: Routes = [
    {
        path: '',
        component: CuentaComponent,
        children: [
            { path: 'restaurante', loadChildren: './restaurant-cuenta/restaurant-cuenta.module#RestaurantCuentaModule' },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaRoutingModule { }

export const routedComponents = [CuentaComponent];
