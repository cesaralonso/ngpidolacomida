import { PlatilloCuentaRoutingModule } from './platillo-cuenta.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlatilloCuentaComponent } from './platillo-cuenta.component';
import { PlatilloAllComponent } from './components/platillo-all/platillo-all.component';
import { PlatilloCreateComponent } from './components/platillo-create/platillo-create.component';
import { PlatilloEditComponent } from './components/platillo-edit/platillo-edit.component';

@NgModule({
    imports: [
        CommonModule,
        PlatilloCuentaRoutingModule
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
