import { PlatilloModule } from './platillo/platillo.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PagesRoutingModule } from './pages.routing';

import { PagesComponent } from './pages.component';

@NgModule({
    imports: [
        PagesRoutingModule,
        CommonModule,
        RestaurantModule,
        PlatilloModule
    ],
    exports: [],
    declarations: [
        PagesComponent,
    ],
    providers: [],
})
export class PagesModule { }
