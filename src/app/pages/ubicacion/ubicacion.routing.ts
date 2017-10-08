import { UbicacionContainerComponent } from './components/ubicacion-container/ubicacion-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicacionComponent } from './ubicacion.component';

const routes: Routes = [
    {
        path: '',
        component: UbicacionComponent,
        children: [
            { path: ':id', component: UbicacionContainerComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbicacionRoutingModule { }

export const routedComponents = [UbicacionComponent];
