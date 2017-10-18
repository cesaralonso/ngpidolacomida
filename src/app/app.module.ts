import { RestaurantService } from './shared/services/restaurant.service';
import { PlatilloService } from './shared/services/platillo.service';
import { ComboService } from './shared/services/combo.service';
import { CuentaModule } from './cuenta/cuenta.module';
import { CardComidaComponent } from './shared/card-comida/card-comida.component';
import { AuthLocalstorage } from './shared/auth-localstorage.service';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth-guard.service';
import { ConfirmModalComponent } from './shared/confim-modal/confirm-modal.component';
import { PagesModule } from './pages/pages.module';
import { HomeModule } from './home/home.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MegamenuComponent } from './shared/megamenu/megamenu.component';
import { MainmenuComponent } from './shared/mainmenu/mainmenu.component';
import { PedirModalComponent } from './shared/pedir-modal/pedir-modal.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpModule } from '@angular/http';
import { Configuration } from './app.constants';
import { LocalStorageModule } from 'angular-2-local-storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MegamenuComponent,
    MainmenuComponent,
    FooterComponent,
    PedirModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ngpidolacomida'}),
    AppRoutingModule,
    HomeModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    PagesModule,
    HttpModule,
    LocalStorageModule.withConfig({
        prefix: 'architectools',
        storageType: 'localStorage'
    }),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added,
    BsDropdownModule.forRoot(),
    CuentaModule
  ],
  providers: [
    Configuration,
    AuthGuard,
    AuthService,
    AuthLocalstorage,
    ComboService,
    PlatilloService,
    RestaurantService
  ],
  entryComponents: [
    PedirModalComponent,
    ConfirmModalComponent
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
