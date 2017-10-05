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

import { PedirModalComponent } from './shared/pedir-modal/pedir-modal.component';
import { FooterComponent } from './shared/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MegamenuComponent,
    MainmenuComponent,
    FooterComponent,
    PedirModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ngpidolacomida'}),
    AppRoutingModule,
    HomeModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    PagesModule,
  ],
  providers: [],
  entryComponents: [
    PedirModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
