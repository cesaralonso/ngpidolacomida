import { PlatilloInterface } from './../../../../shared/models/platillo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillo-all',
  templateUrl: './platillo-all.component.html',
  styleUrls: ['./platillo-all.component.css']
})
export class PlatilloAllComponent implements OnInit {
  public titulo = 'Mis platillos';
  public textColor = '#444';
  public platillos: PlatilloInterface[];
  constructor() {
    this.platillos = [
      {
        idplatillo: 1,
        titulo: 'Pozole',
        descripcion: 'Rico pozole de grano',
        precio: 86.00
      }
    ];
  }

  ngOnInit() {
  }

}
