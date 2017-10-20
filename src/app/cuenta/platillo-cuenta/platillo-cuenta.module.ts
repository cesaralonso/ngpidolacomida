import { FormsModule } from '@angular/forms';
import { TituloPrincipalModule } from './../../shared/titulo-principal/titulo-principal.module';
import { PlatilloCuentaRoutingModule } from './platillo-cuenta.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { SelectModule } from 'ng2-select';

import { PlatilloCuentaComponent } from './platillo-cuenta.component';

import { PlatilloEditComponent } from './components/platillo-edit/platillo-edit.component';
import { PlatilloCreateComponent } from './components/platillo-create/platillo-create.component';
import { PlatilloAllComponent } from './components/platillo-all/platillo-all.component';
import { PlatilloHorarioComponent } from './components/platillo-horario/platillo-horario.component';
import { PlatilloIngredienteComponent } from './components/platillo-ingrediente/platillo-ingrediente.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PlatilloCuentaRoutingModule,
        TituloPrincipalModule,
        TimepickerModule.forRoot(),
        SelectModule
    ],
    exports: [],
    declarations: [
        PlatilloCuentaComponent,
        PlatilloAllComponent,
        PlatilloCreateComponent,
        PlatilloEditComponent,
        PlatilloHorarioComponent,
        PlatilloIngredienteComponent
    ],
    providers: [],
})
export class PlatilloCuentaModule { }
