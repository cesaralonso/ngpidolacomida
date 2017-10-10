import { PlatilloInterface } from './../models/platillo.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card-comida',
    templateUrl: 'card-comida.component.html'
})

export class CardComidaComponent implements OnInit {
    @Input() link: string;
    @Input() imgLink: string;
    @Input() descripcion: string;
    @Input() number: string;

    constructor() { }

    ngOnInit() { }
}
