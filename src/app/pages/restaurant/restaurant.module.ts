import { CommonModule } from '@angular/common';
import { RestaurantRoutingModule } from './restaurant.routing';
import { NgModule } from '@angular/core';

import { RestaurantComponent } from './restaurant.component';
import { RestaurantContainerComponent } from './components/restaurant-container/restaurant-container.component';
import { RestaurantTitleComponent } from './components/restaurant-title/restaurant-title.component';
import { RestaurantInfoComponent } from './components/restaurant-info/restaurant-info.component';

@NgModule({
    imports: [
        RestaurantRoutingModule,
        CommonModule
    ],
    exports: [],
    declarations: [RestaurantComponent, RestaurantContainerComponent, RestaurantTitleComponent, RestaurantInfoComponent],
    providers: [],
})
export class RestaurantModule { }
