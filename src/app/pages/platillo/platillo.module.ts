import { TituloPrincipalModule } from './../../shared/titulo-principal/titulo-principal.module';
import { HorarioModule } from './../../shared/horario/horario.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatilloRoutingModule } from './platillo.routing';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { PlatilloComponent } from './platillo.component';
import { PlatilloSimilarComponent } from './components/platillo-similar/platillo-similar.component';
import { PlatilloInfoComponent } from './components/platillo-info/platillo-info.component';
import { PlatilloContainerComponent } from './components/platillo-container/platillo-container.component';

@NgModule({
    imports: [
        CommonModule,
        PlatilloRoutingModule,
        RatingModule.forRoot(),
        FormsModule,
        NgxCarouselModule,
        HorarioModule,
        TituloPrincipalModule
    ],
    exports: [],
    declarations: [
        PlatilloComponent,
        PlatilloContainerComponent,
        PlatilloInfoComponent,
        PlatilloSimilarComponent
    ],
    providers: [],
})
export class PlatilloModule { }
