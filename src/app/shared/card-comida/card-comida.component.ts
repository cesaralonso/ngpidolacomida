import { PedirModalComponent } from './../pedir-modal/pedir-modal.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { PlatilloInterface } from './../models/platillo.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-card-comida',
    templateUrl: 'card-comida.component.html'
})

export class CardComidaComponent implements OnInit {
    @Input() link: string;
    @Input() imgLink: string;
    @Input() titulo: string;
    @Input() descripcion: string;
    @Input() precio: string;
    @Input() moneda: string;
    @Input() number: string;
    @Output() onModalResponse = new EventEmitter<any>();

    constructor( private dialogService: DialogService ) { }

    ngOnInit() { }

    pedirModal() {
        this.dialogService.addDialog( PedirModalComponent, {
          titulo: 'Pozole',
          descripcion: 'Descripion...'
        }).subscribe( res => {
          console.log( res );
          this.onModalResponse.emit( res );
        });
    }
}
