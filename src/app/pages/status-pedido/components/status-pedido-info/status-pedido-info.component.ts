import { PlatilloInterface } from './../../../../shared/models/platillo.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-status-pedido-info',
  templateUrl: './status-pedido-info.component.html',
  styleUrls: ['./status-pedido-info.component.css']
})
export class StatusPedidoInfoComponent implements OnInit {
  public platillos: PlatilloInterface[] = [];
  public data: Observable<number>;
  public progress = 0;
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
    // Just for simulation while receive info from db
    this.data = new Observable(observer => {
      setTimeout(() => {
          observer.next(25);
      }, 2000);

      setTimeout(() => {
          observer.next(25);
      }, 3000);

      setTimeout(() => {
          observer.next(25);
      }, 4000);

      setTimeout(() => {
          observer.next(25);
      }, 5000);

      setTimeout(() => {
          observer.complete();
      }, 6000);
    });

    this.data.subscribe(
      value => {
        this.progress = this.progress + value;
      },
      error => console.log(error),
      () => console.log('Finished')
  );

  }

}
