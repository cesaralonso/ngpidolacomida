import { ListadosComponent } from './components/listados/listados.component';
import { CardComidaModule } from './../shared/card-comida/card-comida.module';
import { AgmCoreModule } from '@agm/core';
import { ListcocAddModalComponent } from './components/listcocinandose/components/listcocinandose-add-modal/listcocinandose-add-modal.component';
import { ListcocinandoseComponent } from './components/listcocinandose/listcocinandose.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaincarruselComponent } from './components/maincarrusel/maincarrusel.component';
import { MaprestaurantesComponent } from './components/maprestaurantes/maprestaurantes.component';


@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDN4SEq8sbzsAcMCA8jsph4Pv4OyPPq12Y'
    }),
    CardComidaModule
  ],
  declarations: [
    HomeComponent,
    MaincarruselComponent,
    MaprestaurantesComponent,
    ListcocinandoseComponent,
    ListadosComponent,
    ListcocAddModalComponent,
  ],
  entryComponents: [
    ListcocAddModalComponent,
  ],
})
export class HomeModule {
}
