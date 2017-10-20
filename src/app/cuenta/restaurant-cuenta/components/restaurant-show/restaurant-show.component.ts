import { RestaurantePlatilloInterface } from './../../../../shared/models/restaurante-platillo.model';
import { RestaurantePlatilloService } from './../../../../shared/services/restaurante-platillo.service';
import { RestaurantService } from './../../../../shared/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-show',
  templateUrl: './restaurant-show.component.html',
  styleUrls: ['./restaurant-show.component.css']
})
export class RestaurantShowComponent implements OnInit {
  public titulo = 'Mi restaurante';
  public textColor = '#444';

  // Platillos del restaurante
  public misPlatillos: RestaurantePlatilloInterface[];
  // Obtiene el id del restaurante
  public restauranteId: string;
  constructor(
    private restaurantService: RestaurantService,
    private restaurantePlatilloService: RestaurantePlatilloService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params
    .flatMap( parameters => {
      this.restauranteId = parameters['id'];
      return this.restaurantService.findById( this.restauranteId );
    })
    .flatMap( restauranteInfo => {
      if ( restauranteInfo.success ) {
        this.titulo = restauranteInfo.result.nombre;
        return this.restaurantePlatilloService.getByParam( 'restaurante_idrestaurante', restauranteInfo.result.idrestaurante);
      }
    })
    .subscribe( platillosInfo => {
      if ( platillosInfo.success ) {
        this.misPlatillos = platillosInfo.result;
      }
    });
  }

  ngOnInit() {
  }

  getRestaurant( id ) {
    this.restaurantService.findById( id )
      .subscribe( res => console.log(res));
  }

}
