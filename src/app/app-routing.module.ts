import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
      path: 'login',
      loadChildren: './pages/login/login.module#LoginModule'
  },
  {
      path: 'register',
      loadChildren: './pages/register/register.module#RegisterModule'
  },
  {
      path: 'forgot',
      loadChildren: './pages/forgot/forgot.module#ForgotModule'
  },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
  { path: 'mi-cuenta', loadChildren: './cuenta/cuenta.module#CuentaModule' }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
