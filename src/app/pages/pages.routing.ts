import { FaqsComponent } from './faqs/faqs.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { QuienesSomosComponent } from './quienessomos/quienes-somos.component';
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
            { path: 'quienes-somos', component: QuienesSomosComponent },
            { path: 'contactanos', component: ContactanosComponent },
            { path: 'servicios', component: ServiciosComponent },
            { path: 'faqs', component: FaqsComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }

export const routedComponents = [PagesComponent];
