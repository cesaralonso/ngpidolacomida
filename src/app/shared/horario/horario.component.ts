import { Horario } from './horario.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-horario',
    templateUrl: 'horario.component.html'
})

export class HorarioComponent implements OnInit {
    @Input() horario: Horario;

    constructor() { }

    ngOnInit() { }
}
