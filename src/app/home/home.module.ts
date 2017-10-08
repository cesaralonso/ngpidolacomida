import { ListcocAddModalComponent } from './components/listcocinandose/components/listcocinandose-add-modal/listcocinandose-add-modal.component';
import { ListcocinandoseComponent } from './components/listcocinandose/listcocinandose.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaincarruselComponent } from './components/maincarrusel/maincarrusel.component';
import { MaprestaurantesComponent } from './components/maprestaurantes/maprestaurantes.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ContactComponent } from './components/contact/contact.component';


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
