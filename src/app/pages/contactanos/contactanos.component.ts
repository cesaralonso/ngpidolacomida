import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contactanos',
    templateUrl: 'contactanos.component.html',
    styleUrls: ['./contactanos.component.css']
})

export class ContactanosComponent implements OnInit {
    public titulo = 'Contáctanos';
    public background = 'url(assets/img/quienes-somos.jpg)';

    constructor() { }

    ngOnInit() { }
}
