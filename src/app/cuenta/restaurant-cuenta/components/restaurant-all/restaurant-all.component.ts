import { AuthLocalstorage } from './../../../../shared/auth-localstorage.service';
import { RestaurantService } from './../../../../shared/services/restaurant.service';
import { RestauranteInterface } from './../../../../shared/models/restaurante.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-all',
  templateUrl: './restaurant-all.component.html',
  styleUrls: ['./restaurant-all.component.css'],
  providers: [
    RestaurantService,
    AuthLocalstorage
  ]
})
export class RestaurantAllComponent implements OnInit {
  public titulo = 'Mis restaurantes';
  public textColor = '#444';
  public restaurantes: RestauranteInterface[] = [];
  constructor(
    private restaurantService: RestaurantService,
    private authLocalStorage: AuthLocalstorage
  ) { }

  ngOnInit() {
    this.getRestaurantes();
  }

  getRestaurantes() {
    const userId = this.authLocalStorage.getIdUsuario();
    this.restaurantService.getByParam( 'user_iduser', userId)
      .subscribe( res => {
        if ( res.success ) {
          console.log(res);
          this.restaurantes = res.result;
        }
      });
  }

}
