import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatilloComponent } from './platillo.component';
import { PlatilloContainerComponent } from './components/platillo-container/platillo-container.component';

const routes: Routes = [
    {
        path: '',
        component: PlatilloComponent,
        children: [
            { path: 'detalle', component: PlatilloContainerComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatilloRoutingModule { }

export const routedComponents = [PlatilloComponent];
