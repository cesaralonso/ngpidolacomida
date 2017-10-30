import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComboCuentaComponent } from './combo-cuenta.component';

import { ComboEditComponent } from './components/combo-edit/combo-edit.component';
import { ComboCreateComponent } from './components/combo-create/combo-create.component';
import { ComboAllComponent } from './components/combo-all/combo-all.component';

const routes: Routes = [
    {
        path: '',
        component: ComboCuentaComponent,
        children: [
            { path: 'mis-combos', component: ComboAllComponent },
            { path: 'crear/:restauranteId', component: ComboCreateComponent },
            { path: 'editar/:comboId', component: ComboEditComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComboCuentaRoutingModule { }

export const routedComponents = [ComboCuentaComponent];
