import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatilloCuentaComponent } from './platillo-cuenta.component';

const routes: Routes = [
    {
        path: '',
        component: PlatilloCuentaComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatilloCuentaRoutingModule { }

export const routedComponents = [PlatilloCuentaComponent];
