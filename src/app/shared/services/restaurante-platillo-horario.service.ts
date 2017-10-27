import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { BasicRequestsService } from './basic-requests.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantePlatilloHorarioService extends BasicRequestsService {

  constructor ( protected http: Http ) {
    super(http, '/restaurantePlatilloHorario', true);
  }

  public findByIdRestAndPlat( restauranteId, platilloId ): Observable<any> {
    return this.http.get(`${this.endPoint}/${restauranteId}/${platilloId}`)
      .map( res => res.json() || {} )
      .catch( error => JSON.stringify(error) );
  }


  public removeHorario( restauranteId, platilloId, horarioId ): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    headers.append('Authorization', JSON.parse(localStorage.getItem('pidelacomida.token')));
    return this.http.delete(`${this.endPoint}/${restauranteId}/${platilloId}/${horarioId}`, { headers: headers })
      .map( res => res.json() || {})
      .catch( error => JSON.stringify(error));
  }

}
