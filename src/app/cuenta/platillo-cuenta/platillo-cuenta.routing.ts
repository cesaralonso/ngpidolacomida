import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatilloEditComponent } from './components/platillo-edit/platillo-edit.component';
import { PlatilloCreateComponent } from './components/platillo-create/platillo-create.component';
import { PlatilloAllComponent } from './components/platillo-all/platillo-all.component';

import { PlatilloCuentaComponent } from './platillo-cuenta.component';

const routes: Routes = [
    {
        path: '',
        component: PlatilloCuentaComponent,
        children: [
            { path: 'mis-platillos', component: PlatilloAllComponent },
            { path: 'crear', component: PlatilloCreateComponent },
            { path: 'editar/:id', component: PlatilloEditComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatilloCuentaRoutingModule { }

export const routedComponents = [PlatilloCuentaComponent];
