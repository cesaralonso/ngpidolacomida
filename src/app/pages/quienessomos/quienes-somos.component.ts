import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-quienes-somos',
    templateUrl: 'quienes-somos.component.html'
})

export class QuienesSomosComponent implements OnInit {
    public titulo = '¿Quienes somos?';
    public background = 'url(assets/img/quienes-somos.jpg)';

    constructor() { }

    ngOnInit() { }
}
