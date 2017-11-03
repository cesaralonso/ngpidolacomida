import { PlatilloIngredienteService } from './shared/services/platillo-ingrediente.service';
import { IngredienteService } from './shared/services/ingrediente.service';
import { OfertaService } from './shared/services/oferta.service';
import { PlatilloHorarioService } from './shared/services/platillo-horario.service';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { RestaurantePlatilloService } from './shared/services/restaurante-platillo.service';
import { TipoComidaService } from './shared/services/tipo-comida.service';
import { IngredientesCuentaComponent } from './cuenta/ingredientes-cuenta/ingredientes-cuenta.component';
import { RolService } from './shared/services/rol.service';
import { UserService } from './shared/services/user.service';
import { TelefonoService } from './shared/services/telefono.service';
import { BasicRequestsService } from './shared/services/basic-requests.service';
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
import { LOCALE_ID } from '@angular/core';

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
    ConfirmModalComponent,
    IngredientesCuentaComponent,
    AlertModalComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ngpidolacomida'}),
    AppRoutingModule,
    HomeModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    PagesModule,
    HttpModule,
    LocalStorageModule.withConfig({
        prefix: 'pidelacomida',
        storageType: 'localStorage'
    }),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added,
    BsDropdownModule.forRoot(),
    CuentaModule,
  ],
  providers: [
    Configuration,
    AuthGuard,
    AuthService,
    AuthLocalstorage,
    ComboService,
    PlatilloService,
    RestaurantService,
    TelefonoService,
    UserService,
    RolService,
    TipoComidaService,
    RestaurantePlatilloService,
    PlatilloHorarioService,
    OfertaService,
    IngredienteService,
    PlatilloIngredienteService,
    { provide: LOCALE_ID, useValue: 'es-MEX' }
  ],
  entryComponents: [
    PedirModalComponent,
    ConfirmModalComponent,
    AlertModalComponent
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
