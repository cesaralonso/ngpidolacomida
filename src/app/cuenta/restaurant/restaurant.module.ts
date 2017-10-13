import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TituloPrincipalModule } from './../../shared/titulo-principal/titulo-principal.module';
import { RestaurantRoutingModule } from './restaurant.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RestaurantComponent } from './restaurant.component';
import { RestaurantCreateComponent } from './components/restaurant-create/restaurant-create.component';
import { RestaurantEditComponent } from './components/restaurant-edit/restaurant-edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RestaurantRoutingModule,
        TituloPrincipalModule
    ],
    exports: [],
    declarations: [
        RestaurantComponent,
        RestaurantCreateComponent,
        RestaurantEditComponent
    ],
    providers: [],
})
export class RestaurantModule { }
