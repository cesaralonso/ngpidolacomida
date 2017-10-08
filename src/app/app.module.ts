import { PagesModule } from './pages/pages.module';
import { HomeModule } from './home/home.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MegamenuComponent } from './megamenu/megamenu.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { HorariosComponent } from './shared/horarios/horarios.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MegamenuComponent,
    MainmenuComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ngpidolacomida'}),
    AppRoutingModule,
    HomeModule,
    BootstrapModalModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
