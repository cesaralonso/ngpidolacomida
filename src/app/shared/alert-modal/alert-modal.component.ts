import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Component, OnInit } from '@angular/core';

export interface AlertModel {
    title: string;
    message: string;
}

@Component({
    selector: 'app-alert-modal',
    templateUrl: 'alert-modal.component.html'
})

export class AlertModalComponent extends DialogComponent<AlertModel, null> implements AlertModel {
    title: string;
    message: string;

    constructor( dialogService: DialogService) {
        super(dialogService);
    }


}
