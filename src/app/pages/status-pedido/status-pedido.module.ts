import { StatusPedidoRoutingModule } from './status-pedido.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StatusPedidoComponent } from './status-pedido.component';
import { StatusPedidoContainerComponent } from './components/status-pedido-container/status-pedido-container.component';
import { StatusPedidoInfoComponent } from './components/status-pedido-info/status-pedido-info.component';

@NgModule({
    imports: [
        CommonModule,
        StatusPedidoRoutingModule,
    ],
    exports: [],
    declarations: [
        StatusPedidoComponent,
        StatusPedidoContainerComponent,
        StatusPedidoInfoComponent
    ],
    providers: [],
})
export class StatusPedidoModule { }
