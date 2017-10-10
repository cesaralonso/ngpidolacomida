import { CardComidaModule } from './../../shared/card-comida/card-comida.module';
import { CardComidaComponent } from './../../shared/card-comida/card-comida.component';
import { TituloPrincipalModule } from './../../shared/titulo-principal/titulo-principal.module';
import { OfertasRoutingModule } from './ofertas.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OfertasComponent } from './ofertas.component';
import { OfertasContainerComponent } from './components/ofertas-container/ofertas-container.component';
import { OfertasInfoComponent } from './components/ofertas-info/ofertas-info.component';

@NgModule({
    imports: [
        CommonModule,
        OfertasRoutingModule,
        TituloPrincipalModule,
        CardComidaModule
    ],
    exports: [],
    declarations: [
        OfertasComponent,
        OfertasContainerComponent,
        OfertasInfoComponent,
    ],
    providers: [],
})
export class OfertasModule { }
