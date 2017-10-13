import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-titulo-principal',
    templateUrl: 'titulo-principal.component.html'
})

export class TituloPrincipalComponent implements OnInit {
    @Input() titulo = '';
    @Input() background = '';
    @Input() textColor = 'white';
    @Input() id = 'hero';
    constructor() { }

    ngOnInit() { }
}
