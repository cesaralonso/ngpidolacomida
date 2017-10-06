import { PlatilloInterface } from './../../../../shared/models/platillo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacion-container',
  templateUrl: './confirmacion-container.component.html',
  styleUrls: ['./confirmacion-container.component.css']
})
export class ConfirmacionContainerComponent implements OnInit {
  public platillos: PlatilloInterface[] = [];
  constructor() {
    this.platillos.push(
      {
        titulo: 'POZOLE',
        // tslint:disable-next-line:max-line-length
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe assumenda, similique possimus accusamus corporis ab quos aliquam quae error ipsum quas ad, dolore dolor tempora exercitationem optio fuga voluptatum!',
        precio: 35,
        ingredientes: [
          'Lechuga',
          'Cebolla',
          'Jitomate'
        ]
      },
      {
        titulo: 'ENCHILADAS',
        // tslint:disable-next-line:max-line-length
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe assumenda, similique possimus accusamus corporis ab quos aliquam quae error ipsum quas ad, dolore dolor tempora exercitationem optio fuga voluptatum!',
        precio: 46,
        ingredientes: [
          'Lechuga',
          'Cebolla',
          'Jitomate'
        ]
      }
  );
   }

  ngOnInit() {
  }

}
