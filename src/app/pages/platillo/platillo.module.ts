import { NgModule } from '@angular/core';

import { PlatilloComponent } from './platillo.component';
import { PlatilloSimilarComponent } from './components/platillo-similar/platillo-similar.component';
import { PlatilloInfoComponent } from './components/platillo-info/platillo-info.component';
import { PlatilloContainerComponent } from './components/platillo-container/platillo-container.component';
import { PlatilloTitleComponent } from './components/platillo-title/platillo-title.component';

@NgModule({
    imports: [],
    exports: [],
    declarations: [
        PlatilloComponent,
        PlatilloTitleComponent,
        PlatilloContainerComponent,
        PlatilloInfoComponent,
        PlatilloSimilarComponent
    ],
    providers: [],
})
export class PlatilloModule { }
