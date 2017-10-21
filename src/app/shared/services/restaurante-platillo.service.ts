import { RestaurantePlatilloInterface } from './../models/restaurante-platillo.model';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { BasicRequestsService } from './basic-requests.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantePlatilloService extends BasicRequestsService {

  constructor ( protected http: Http ) {
    super(http, '/restaurantePlatillo', true);
  }

  public create( restaurantePlatillo: RestaurantePlatilloInterface ): Observable<any> {
    restaurantePlatillo.tiempopreparacion =
      `${restaurantePlatillo.tiempoPreparacionForView.getHours()}:${restaurantePlatillo.tiempoPreparacionForView.getMinutes()}:00`;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', JSON.parse(localStorage.getItem('pidelacomida.token')));
    return this.http.post(`${this.endPoint}`, restaurantePlatillo, { headers: headers })
      .map( res => res.json() || {})
      .catch( error => JSON.stringify(error));
  }

  public update( restaurantePlatillo: RestaurantePlatilloInterface ): Observable<any> {
    restaurantePlatillo.tiempopreparacion =
    `${restaurantePlatillo.tiempoPreparacionForView.getHours()}:${restaurantePlatillo.tiempoPreparacionForView.getMinutes()}:00`;
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', JSON.parse(localStorage.getItem('pidelacomida.token')));
    return this.http.patch(`${this.endPoint}`, restaurantePlatillo, { headers: headers })
      .map( res => res.json() || {})
      .catch( error => JSON.stringify(error));
  }
}
