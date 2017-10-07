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

@NgModule({
    imports: [
        PagesRoutingModule,
        CommonModule,
        RestaurantModule,
        PlatilloModule,
        PagarModule,
        UbicacionModule,
        ConfirmacionModule,
        StatusPedidoModule
    ],
    exports: [],
    declarations: [
        PagesComponent,
    ],
    providers: [],
})
export class PagesModule { }
