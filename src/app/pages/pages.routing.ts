import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { AuthGuard } from '../shared/auth-guard.service';

const routes: Routes = [

    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'restaurant', loadChildren: './restaurant/restaurant.module#RestaurantModule' },
            { path: 'platillo', loadChildren: './platillo/platillo.module#PlatilloModule' },
            { path: 'pagar', loadChildren: './pagar/pagar.module#PagarModule' },
            { path: 'ubicacion', loadChildren: './ubicacion/ubicacion.module#UbicacionModule' },
            { path: 'confirmacion', loadChildren: './confirmacion/confirmacion.module#ConfirmacionModule' },
            { path: 'status', loadChildren: './status-pedido/status-pedido.module#StatusPedidoModule' },
            { path: 'ofertas', loadChildren: './ofertas/ofertas.module#OfertasModule' },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }

export const routedComponents = [PagesComponent];
