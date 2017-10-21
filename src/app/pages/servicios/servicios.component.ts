import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servicios',
    templateUrl: 'servicios.component.html',
    styleUrls: ['./servicios.component.css']
})

export class ServiciosComponent implements OnInit {
    public titulo = 'Nuestros Servicios';
    public background = 'url(assets/img/quienes-somos.jpg)';

    constructor() { }

    ngOnInit() { }
}
