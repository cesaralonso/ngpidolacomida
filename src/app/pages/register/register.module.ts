import { RegisterService } from './register.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { routing } from './register.routing';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    RegisterService,
  ]
})
export class RegisterModule {}
