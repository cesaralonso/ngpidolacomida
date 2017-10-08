import { ConfirmModalComponent } from './../../../../shared/confim-modal/confirm-modal.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { PlatilloInterface } from './../../../../shared/models/platillo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagar-platillos',
  templateUrl: './pagar-platillos.component.html',
  styleUrls: ['./pagar-platillos.component.css']
})
export class PagarPlatillosComponent implements OnInit {
  public platillos: PlatilloInterface[] = [];
  constructor( private dialogService: DialogService ) {
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

  deletePlatillo( id: string ) {
    this.dialogService.addDialog( ConfirmModalComponent, {
      titulo: 'Eliminar platillo de Mi Pedido',
      descripcion: '¿Seguro que quieres quitarlo de Mi Pedido?'
    }).subscribe( remove => {
      if ( remove ) {
        console.log('Remove item');
        // Remove platillo by getting the index in array
      } else {
        console.log('Canceled');
      }
    });
  }

}
