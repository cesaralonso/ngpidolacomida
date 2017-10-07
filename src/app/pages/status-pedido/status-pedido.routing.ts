import { StatusPedidoContainerComponent } from './components/status-pedido-container/status-pedido-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusPedidoComponent } from './status-pedido.component';

const routes: Routes = [
    {
        path: '',
        component: StatusPedidoComponent,
        children: [
            { path: ':id', component: StatusPedidoContainerComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusPedidoRoutingModule { }

export const routedComponents = [StatusPedidoComponent];
