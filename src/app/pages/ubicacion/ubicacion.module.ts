import { UbicacionRoutingModule } from './ubicacion.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UbicacionComponent } from './ubicacion.component';
import { UbicacionContainerComponent } from './components/ubicacion-container/ubicacion-container.component';
import { UbicacionElegirComponent } from './components/ubicacion-elegir/ubicacion-elegir.component';
import { UbicacionCrearComponent } from './components/ubicacion-crear/ubicacion-crear.component';

@NgModule({
    imports: [
        CommonModule,
        UbicacionRoutingModule
    ],
    exports: [],
    declarations: [
        UbicacionComponent,
        UbicacionContainerComponent,
        UbicacionElegirComponent,
        UbicacionCrearComponent
    ],
    providers: [],
})
export class UbicacionModule { }
