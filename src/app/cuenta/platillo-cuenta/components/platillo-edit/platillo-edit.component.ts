import { PlatilloInterface } from './../../../../shared/models/platillo.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillo-edit',
  templateUrl: './platillo-edit.component.html',
  styleUrls: ['./platillo-edit.component.css']
})
export class PlatilloEditComponent implements OnInit {
  public titulo = 'Editar datos del platillo';
  public textColor = '#444';
  public isMeridian = false;
  public tiempoPreparacionPicker: Date = new Date(); // Tiempo de preparacion
  public horarioInicial: Date = new Date(); // Hora de abrir
  public horarioFinal: Date = new Date(); // Hora de cerrar

  public platillo: PlatilloInterface;
  constructor( activatedRoute: ActivatedRoute ) {
    // Set hours to zero
    this.tiempoPreparacionPicker.setHours(0);
    this.tiempoPreparacionPicker.setMinutes(0);
    this.horarioInicial.setHours(0);
    this.horarioInicial.setMinutes(0);
    this.horarioFinal.setHours(0);
    this.horarioFinal.setMinutes(0);

    activatedRoute.params.subscribe( parameters => {
      const id = parameters['id'];
      this.getPlatillo( id );
    });
   }

  ngOnInit() {
  }

  getPlatillo( id: number ) {
    this.platillo = {
      titulo: 'Pozole de grano',
      descripcion: 'Rico pozole de grano',
      precio: 86.00,
      ingredientes: [
        'Cebolla',
        'Lechuga',
        'Limon'
      ]
    };
  }

}
