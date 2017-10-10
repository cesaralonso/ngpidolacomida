import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertasComponent } from './ofertas.component';
import { OfertasContainerComponent } from './components/ofertas-container/ofertas-container.component';

const routes: Routes = [
    {
        path: '',
        component: OfertasComponent,
        children: [
            { path: '', component: OfertasContainerComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertasRoutingModule { }

export const routedComponents = [OfertasComponent];
