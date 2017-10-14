import { TituloPrincipalModule } from './../../shared/titulo-principal/titulo-principal.module';
import { ComboCuentaRoutingModule } from './combo-cuenta.routing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComboCuentaComponent } from './combo-cuenta.component';
import { ComboAllComponent } from './components/combo-all/combo-all.component';
import { ComboEditComponent } from './components/combo-edit/combo-edit.component';
import { ComboCreateComponent } from './components/combo-create/combo-create.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ComboCuentaRoutingModule,
        TituloPrincipalModule
    ],
    exports: [],
    declarations: [
        ComboCuentaComponent,
        ComboAllComponent,
        ComboEditComponent,
        ComboCreateComponent
    ],
    providers: [],
})
export class ComboCuentaModule { }
