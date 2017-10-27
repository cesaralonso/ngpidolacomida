import { PlatilloOfertasComponent } from './components/platillo-ofertas/platillo-ofertas.component';
import { PlatilloIngredienteComponent } from './components/platillo-ingrediente/platillo-ingrediente.component';
import { PlatilloHorarioComponent } from './components/platillo-horario/platillo-horario.component';
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
            { path: 'crear/:restauranteId', component: PlatilloCreateComponent },
            { path: 'editar/:id', component: PlatilloEditComponent },
            { path: 'horarios/:platilloId', component: PlatilloHorarioComponent },
            { path: 'ingredientes/:id', component: PlatilloIngredienteComponent },
            { path: 'ofertas/:platilloId/:restauranteId', component: PlatilloOfertasComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatilloCuentaRoutingModule { }

export const routedComponents = [PlatilloCuentaComponent];
