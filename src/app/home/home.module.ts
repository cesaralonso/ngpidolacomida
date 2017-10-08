import { ListcocAddModalComponent } from './../listcocinandose/components/listcocinandose-add-modal/listcocinandose-add-modal.component';
import { ListcocinandoseComponent } from './../listcocinandose/listcocinandose.component';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { MaincarruselComponent } from './../maincarrusel/maincarrusel.component';
import { MaprestaurantesComponent } from './../maprestaurantes/maprestaurantes.component';
import { FaqsComponent } from './../faqs/faqs.component';
import { ContactComponent } from './../contact/contact.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HomeComponent,
    MaincarruselComponent,
    MaprestaurantesComponent,
    FaqsComponent,
    ContactComponent,
    ListcocinandoseComponent,
    ListcocAddModalComponent,
  ],
  entryComponents: [
    ListcocAddModalComponent,
  ],
})
export class HomeModule {
}
