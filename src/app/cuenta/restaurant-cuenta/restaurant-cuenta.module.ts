import { RestaurantCuentaRoutingModule } from './restaurant-cuenta.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TituloPrincipalModule } from './../../shared/titulo-principal/titulo-principal.module';

import { RestaurantEditComponent } from './components/restaurant-edit/restaurant-edit.component';
import { RestaurantCreateComponent } from './components/restaurant-create/restaurant-create.component';
import { RestaurantCuentaComponent } from './restaurant-cuenta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RestaurantCuentaRoutingModule,
        TituloPrincipalModule
    ],
    exports: [],
    declarations: [
        RestaurantCuentaComponent,
        RestaurantCreateComponent,
        RestaurantEditComponent
    ],
    providers: [],
})
export class RestaurantCuentaModule { }
