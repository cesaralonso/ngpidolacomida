import { ServiciosComponent } from './servicios/servicios.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { TituloPrincipalModule } from './../shared/titulo-principal/titulo-principal.module';
import { QuienesSomosComponent } from './quienessomos/quienes-somos.component';
import { OfertasModule } from './ofertas/ofertas.module';
import { StatusPedidoModule } from './status-pedido/status-pedido.module';
import { ConfirmacionModule } from './confirmacion/confirmacion.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { PagarModule } from './pagar/pagar.module';
import { PlatilloModule } from './platillo/platillo.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing';
import { PagesComponent } from './pages.component';
import { FaqsComponent } from './faqs/faqs.component';

@NgModule({
    imports: [
        PagesRoutingModule,
        CommonModule,
        RestaurantModule,
        PlatilloModule,
        PagarModule,
        UbicacionModule,
        ConfirmacionModule,
        StatusPedidoModule,
        OfertasModule,
        TituloPrincipalModule
    ],
    exports: [],
    declarations: [
        PagesComponent,
        QuienesSomosComponent,
        ContactanosComponent,
        ServiciosComponent,
        FaqsComponent,
    ],
    providers: [],
})
export class PagesModule { }
