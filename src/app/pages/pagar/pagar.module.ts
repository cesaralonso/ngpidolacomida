import { TituloPrincipalModule } from './../../shared/titulo-principal/titulo-principal.module';
import { PagarRoutingModule } from './pagar.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagarComponent } from './pagar.component';
import { PagarContainerComponent } from './components/pagar-container/pagar-container.component';
import { PagarInfoComponent } from './components/pagar-info/pagar-info.component';
import { PagarPlatillosComponent } from './components/pagar-platillos/pagar-platillos.component';

@NgModule({
    imports: [
        CommonModule,
        PagarRoutingModule,
        TituloPrincipalModule
    ],
    exports: [],
    declarations: [
        PagarComponent,
        PagarContainerComponent,
        PagarInfoComponent,
        PagarPlatillosComponent
    ],
    providers: [],
})
export class PagarModule { }
