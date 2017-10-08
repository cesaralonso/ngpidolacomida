
import { HorarioModule } from './../../shared/horario/horario.module';
import { CommonModule } from '@angular/common';
import { RestaurantRoutingModule } from './restaurant.routing';
import { NgModule } from '@angular/core';
import { AccordionModule, AccordionConfig } from 'ngx-bootstrap/accordion';

import { RestaurantComponent } from './restaurant.component';
import { RestaurantContainerComponent } from './components/restaurant-container/restaurant-container.component';
import { RestaurantTitleComponent } from './components/restaurant-title/restaurant-title.component';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';
import { RestaurantDishesComponent } from './components/restaurant-dishes/restaurant-dishes.component';

@NgModule({
    imports: [
        RestaurantRoutingModule,
        CommonModule,
        AccordionModule,
        HorarioModule
    ],
    exports: [],
    declarations: [
        RestaurantComponent,
        RestaurantContainerComponent,
        RestaurantTitleComponent,
        RestaurantInfoComponent,
        RestaurantDishesComponent,
        HorariosComponent
    ],
    providers: [
        AccordionConfig
    ],
})
export class RestaurantModule { }
