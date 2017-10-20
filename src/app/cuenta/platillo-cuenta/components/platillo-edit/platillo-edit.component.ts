import { PlatilloService } from './../../../../shared/services/platillo.service';
import { PlatilloInterface } from './../../../../shared/models/platillo.model';
import { RestaurantePlatilloService } from './../../../../shared/services/restaurante-platillo.service';
import { RestaurantePlatilloInterface } from './../../../../shared/models/restaurante-platillo.model';
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
  public horarioInicial: Date = new Date(); // Hora de abrir
  public horarioFinal: Date = new Date(); // Hora de cerrar

  public restaurantePlatillo: RestaurantePlatilloInterface = {
    descripcion: '',
    precio: 0,
    tiempoPreparacionForView: new Date()
  };
  public platillo: PlatilloInterface = {
    nombre: '',
    descripcion: ''
  };
  constructor(
    activatedRoute: ActivatedRoute,
    private restaurantePlatilloService: RestaurantePlatilloService,
    private platilloService: PlatilloService
  ) {
    // Set hours to zero
    this.horarioInicial.setHours(0);
    this.horarioInicial.setMinutes(0);
    this.horarioFinal.setHours(0);
    this.horarioFinal.setMinutes(0);

    activatedRoute.params
      .flatMap( parameters => {
        const id = parameters['id'];
        return this.platilloService.findById(id);
      })
      .flatMap( res => {
        if ( res.success ) {
          this.platillo = res.result;
          return this.restaurantePlatilloService.getByParam( 'platillo_idplatillo', this.platillo.idplatillo);
        }
      })
      .subscribe( platilloInfo => {
        if ( platilloInfo.success ) {
          this.restaurantePlatillo = platilloInfo.result[0];
          // Asigna las horas y minutos
          const hours: number = this.restaurantePlatillo.tiempopreparacion.substring(3, 5);
          const minutes: number = this.restaurantePlatillo.tiempopreparacion.substring(6, 8);
          this.restaurantePlatillo.tiempoPreparacionForView = new Date();
          this.restaurantePlatillo.tiempoPreparacionForView.setHours(hours || 0);
          this.restaurantePlatillo.tiempoPreparacionForView.setMinutes(minutes || 0);
        }
      });
   }

  ngOnInit() {
  }

}
