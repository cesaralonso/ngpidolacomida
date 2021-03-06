import { CardComidaModule } from './../../shared/card-comida/card-comida.module';
import { FormsModule } from '@angular/forms';
import { TituloPrincipalModule } from './../../shared/titulo-principal/titulo-principal.module';
import { PlatilloCuentaRoutingModule } from './platillo-cuenta.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { SelectModule } from 'ng2-select';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FileSelectDirective } from 'ng2-file-upload';

import { PlatilloCuentaComponent } from './platillo-cuenta.component';

import { PlatilloOfertasComponent } from './components/platillo-ofertas/platillo-ofertas.component';
import { PlatilloIngredienteComponent } from './components/platillo-ingrediente/platillo-ingrediente.component';
import { PlatilloHorarioComponent } from './components/platillo-horario/platillo-horario.component';
import { PlatilloEditComponent } from './components/platillo-edit/platillo-edit.component';
import { PlatilloCreateComponent } from './components/platillo-create/platillo-create.component';
import { PlatilloAllComponent } from './components/platillo-all/platillo-all.component';

@NgModule({
    declarations: [
        PlatilloCuentaComponent,
        PlatilloAllComponent,
        PlatilloCreateComponent,
        PlatilloEditComponent,
        PlatilloHorarioComponent,
        PlatilloIngredienteComponent,
        PlatilloOfertasComponent,
        FileSelectDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        PlatilloCuentaRoutingModule,
        TituloPrincipalModule,
        TimepickerModule.forRoot(),
        SelectModule,
        TooltipModule.forRoot(),
        BsDatepickerModule.forRoot(),
        CardComidaModule
    ],
    exports: [],
    providers: []
})
export class PlatilloCuentaModule { }
