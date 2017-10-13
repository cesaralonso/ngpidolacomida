import { PlatilloCuentaModule } from './platillo-cuenta/platillo-cuenta.module';
import { RestaurantCuentaModule } from './restaurant-cuenta/restaurant-cuenta.module';
import { CuentaRoutingModule } from './cuenta.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CuentaComponent } from './cuenta.component';

@NgModule({
    imports: [
        CommonModule,
        CuentaRoutingModule,
        RestaurantCuentaModule,
        PlatilloCuentaModule
    ],
    exports: [],
    declarations: [
        CuentaComponent
    ],
    providers: [],
})
export class CuentaModule { }
