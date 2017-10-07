import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TituloPrincipalComponent } from './titulo-principal.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        TituloPrincipalComponent
    ],
    declarations: [TituloPrincipalComponent],
    providers: [],
})
export class TituloPrincipalModule { }
