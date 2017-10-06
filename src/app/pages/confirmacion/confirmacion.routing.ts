import { ConfirmacionContainerComponent } from './components/confirmacion-container/confirmacion-container.component';
import { ConfirmacionComponent } from './confirmacion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        component: ConfirmacionComponent,
        children: [
            { path: ':id', component: ConfirmacionContainerComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionRoutingModule { }

export const routedComponents = [ConfirmacionComponent];
