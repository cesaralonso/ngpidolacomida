import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComboCuentaComponent } from './combo-cuenta.component';

const routes: Routes = [
    {
        path: '',
        component: ComboCuentaComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComboCuentaRoutingModule { }

export const routedComponents = [ComboCuentaComponent];
