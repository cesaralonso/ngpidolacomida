import { ComboInterface } from './../../../../shared/models/combo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-all',
  templateUrl: './combo-all.component.html',
  styleUrls: ['./combo-all.component.css']
})
export class ComboAllComponent implements OnInit {
  public titulo = 'Mis combos';
  public textColor = '#444';

  public combos: ComboInterface[];
  constructor() {
    this.combos = [
      {
        titulo: 'Paquete 1',
        descripcion: 'Llevate un pozole con unas papas y un refresco',
        precio: 100.00,
        id: 1,
      },
      {
        titulo: 'Paquete 2',
        descripcion: 'Llevate 4 echiladas y un refresco',
        precio: 80.00,
        id: 2,
      }
    ];
   }

  ngOnInit() {
  }

}
