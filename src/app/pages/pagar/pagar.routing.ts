import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagarComponent } from './pagar.component';
import { PagarContainerComponent } from './components/pagar-container/pagar-container.component';

const routes: Routes = [
    {
        path: '',
        component: PagarComponent,
        children: [
            { path: ':id', component: PagarContainerComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagarRoutingModule { }

export const routedComponents = [PagarComponent];
