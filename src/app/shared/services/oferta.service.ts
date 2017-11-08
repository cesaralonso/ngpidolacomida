import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { BasicRequestsService } from './basic-requests.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OfertaService extends BasicRequestsService {

  constructor ( protected http: Http ) {
    super(http, '/oferta', true);
  }

  public findByIdRestAndPlat( restauranteId, platilloId ): Observable<any> {
    return this.http.get(`${this.endPoint}/findByIdRestAndPlat/${restauranteId}/${platilloId}`)
      .map( res => res.json() || {} )
      .catch( error => JSON.stringify(error) );
  }

  public removeByRestAndPlatId( restauranteId, platilloId ): Observable<any> {
    return this.http.delete(`${this.endPoint}/${restauranteId}/${platilloId}`)
      .map( res => res.json() || {} )
      .catch( error => JSON.stringify(error) );
  }
  public updateOferta( ofertaId, data ): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    if ( this.requireAuthentication ) {
      headers.append('Authorization', JSON.parse(localStorage.getItem('pidelacomida.token')));
    }
    return this.http.patch(`${this.endPoint}/${ofertaId}`, data, { headers: headers })
      .map( res => res.json() || {})
      .catch( error => JSON.stringify(error));
  }


}
