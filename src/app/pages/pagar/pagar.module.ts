import { PagarRoutingModule } from './pagar.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagarComponent } from './pagar.component';
import { PagarContainerComponent } from './components/pagar-container/pagar-container.component';
import { PagarTitleComponent } from './components/pagar-title/pagar-title.component';
import { PagarInfoComponent } from './components/pagar-info/pagar-info.component';
import { PagarPlatillosComponent } from './components/pagar-platillos/pagar-platillos.component';

@NgModule({
    imports: [
        CommonModule,
        PagarRoutingModule
    ],
    exports: [],
    declarations: [
        PagarComponent,
        PagarContainerComponent,
        PagarTitleComponent,
        PagarInfoComponent,
        PagarPlatillosComponent
    ],
    providers: [],
})
export class PagarModule { }
