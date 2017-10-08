import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionRoutingModule } from './ubicacion.routing';

import { UbicacionComponent } from './ubicacion.component';
import { UbicacionContainerComponent } from './components/ubicacion-container/ubicacion-container.component';
import { UbicacionElegirComponent } from './components/ubicacion-elegir/ubicacion-elegir.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UbicacionRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAcEMmn3jQ0x_h7zXyPr5YkFhbhLZ6kgHI'
          })
    ],
    exports: [],
    declarations: [
        UbicacionComponent,
        UbicacionContainerComponent,
        UbicacionElegirComponent,
    ],
    providers: [],
})
export class UbicacionModule { }
