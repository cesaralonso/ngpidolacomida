import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaComponent } from './cuenta.component';

const routes: Routes = [
    {
        path: '',
        component: CuentaComponent,
        children: [
            { path: 'restaurante', loadChildren: './restaurant-cuenta/restaurant-cuenta.module#RestaurantCuentaModule' },
            { path: 'platillo', loadChildren: './platillo-cuenta/platillo-cuenta.module#PlatilloCuentaModule' },
            { path: 'combo', loadChildren: './combo-cuenta/combo-cuenta.module#ComboCuentaModule' },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaRoutingModule { }

export const routedComponents = [CuentaComponent];
