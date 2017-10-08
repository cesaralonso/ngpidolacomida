import { Horario } from './horario.model';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HorarioComponent } from './horario.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        HorarioComponent,
    ],
    declarations: [
        HorarioComponent,
    ],
    providers: [],
})
export class HorarioModule { }
