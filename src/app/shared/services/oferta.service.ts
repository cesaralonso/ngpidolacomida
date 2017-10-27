import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
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
}
