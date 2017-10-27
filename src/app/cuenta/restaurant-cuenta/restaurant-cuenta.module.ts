import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TituloPrincipalModule } from './../../shared/titulo-principal/titulo-principal.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { RestaurantCuentaRoutingModule } from './restaurant-cuenta.routing';

import { RestaurantShowComponent } from './components/restaurant-show/restaurant-show.component';
import { RestaurantAllComponent } from './components/restaurant-all/restaurant-all.component';
import { RestaurantEditComponent } from './components/restaurant-edit/restaurant-edit.component';
import { RestaurantCreateComponent } from './components/restaurant-create/restaurant-create.component';
import { RestaurantCuentaComponent } from './restaurant-cuenta.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RestaurantCuentaRoutingModule,
        TituloPrincipalModule,
        TooltipModule.forRoot()
    ],
    exports: [],
    declarations: [
        RestaurantCuentaComponent,
        RestaurantCreateComponent,
        RestaurantEditComponent,
        RestaurantAllComponent,
        RestaurantShowComponent
    ],
    providers: [],
})
export class RestaurantCuentaModule { }
