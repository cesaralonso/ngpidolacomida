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
  public tiempoPreparacionPicker: Date = new Date(); // Tiempo de preparacion
  public horarioInicial: Date = new Date(); // Hora de abrir
  public horarioFinal: Date = new Date(); // Hora de cerrar

  public platillo: RestaurantePlatilloInterface;

  constructor(
    activatedRoute: ActivatedRoute,
    private restaurantePlatilloService: RestaurantePlatilloService
  ) {
    // Set hours to zero
    this.tiempoPreparacionPicker.setHours(0);
    this.tiempoPreparacionPicker.setMinutes(0);
    this.horarioInicial.setHours(0);
    this.horarioInicial.setMinutes(0);
    this.horarioFinal.setHours(0);
    this.horarioFinal.setMinutes(0);

    activatedRoute.params
      .flatMap( parameters => {
        const id = parameters['id'];
        return this.restaurantePlatilloService.getByParam( 'platillo_idplatillo ', id);
      }).subscribe( platilloInfo => {
        if ( platilloInfo.success ) {
          this.platillo = platilloInfo.result;
          console.log(this.platillo);
        }
      });
   }

  ngOnInit() {
  }

}
