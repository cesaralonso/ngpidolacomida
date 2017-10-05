import { PedirModalComponent } from './../../../../shared/pedir-modal/pedir-modal.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillo-info',
  templateUrl: './platillo-info.component.html',
  styleUrls: ['./platillo-info.component.css']
})
export class PlatilloInfoComponent implements OnInit {
  public max = 5;
  public rate = 3;
  public isReadonly = true;

  public overStar: number;
  public percent: number;

  public horario: any;

  constructor(
    private dialogService: DialogService
  ) {
    this.horario = {
      lunesInicia: '9:00',
      lunesTermina: '14:00',
      martesInicia: '9:00',
      martesTermina: '14:00',
      miercolesInicia: '9:00',
      miercolesTermina: '14:00',
      juevesInicia: '9:00',
      juevesTermina: '14:00',
      viernesInicia: '9:00',
      viernesTermina: '14:00',
      sabadoInicia: '9:00',
      sabadoTermina: '14:00',
      domingoInicia: '9:00',
      domingoTermina: '14:00'
    };
  }

  ngOnInit() {
  }

  pedirModal() {
    this.dialogService.addDialog( PedirModalComponent, {
      titulo: 'Pozole',
      descripcion: 'Descripion...'
    }).subscribe( res => {
      console.log( res );
    });
  }

}
