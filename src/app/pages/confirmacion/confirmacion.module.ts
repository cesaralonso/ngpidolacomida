import { ConfirmacionRoutingModule } from './confirmacion.routing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConfirmacionComponent } from './confirmacion.component';
import { ConfirmacionContainerComponent } from './components/confirmacion-container/confirmacion-container.component';
import { ConfirmacionInfoComponent } from './components/confirmacion-info/confirmacion-info.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ConfirmacionRoutingModule
    ],
    exports: [],
    declarations: [
        ConfirmacionComponent,
        ConfirmacionContainerComponent,
        ConfirmacionInfoComponent,
    ],
    providers: [],
})
export class ConfirmacionModule { }
