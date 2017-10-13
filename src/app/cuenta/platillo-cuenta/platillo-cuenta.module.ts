import { FormsModule } from '@angular/forms';
import { TituloPrincipalModule } from './../../shared/titulo-principal/titulo-principal.module';
import { PlatilloCuentaRoutingModule } from './platillo-cuenta.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { PlatilloCuentaComponent } from './platillo-cuenta.component';

import { PlatilloEditComponent } from './components/platillo-edit/platillo-edit.component';
import { PlatilloCreateComponent } from './components/platillo-create/platillo-create.component';
import { PlatilloAllComponent } from './components/platillo-all/platillo-all.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PlatilloCuentaRoutingModule,
        TituloPrincipalModule,
        TimepickerModule.forRoot()
    ],
    exports: [],
    declarations: [
        PlatilloCuentaComponent,
        PlatilloAllComponent,
        PlatilloCreateComponent,
        PlatilloEditComponent
    ],
    providers: [],
})
export class PlatilloCuentaModule { }
