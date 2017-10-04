import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

@NgModule({
    imports: [
        PagesRoutingModule,
        CommonModule
    ],
    exports: [],
    declarations: [PagesComponent],
    providers: [],
})
export class PagesModule { }
