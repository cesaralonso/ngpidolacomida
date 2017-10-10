import { DialogService } from 'ng2-bootstrap-modal';
import { PlatilloInterface } from './../models/platillo.model';
import { DialogComponent } from 'ng2-bootstrap-modal';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-pedir-modal',
    templateUrl: 'pedir-modal.component.html'
})

export class PedirModalComponent extends DialogComponent<PlatilloInterface, any> implements PlatilloInterface {
    titulo: string;
    descripcion: string;
    public dishes: number;
    constructor( dialogService: DialogService) {
        super( dialogService );
        this.dishes = 1;
    }
    reduce() {
        if ( this.dishes > 1 ) {
            this.dishes--;
        }
    }
    increment() {
        this.dishes++;
    }
    confirm() {
        this.result = 'Success!'; // result is passed to subscribe method from addDialog observer
        this.close();
    }
}
