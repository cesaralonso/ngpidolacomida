import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { BasicRequestsService } from './basic-requests.service';
import { ComboInterface } from '../models/combo.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ComboService extends BasicRequestsService {

  constructor ( protected http: Http ) {
    super(http, '/combo', true);
  }
  public findByIdWithPlatillos( id ): Observable<any> {
    return this.http.get(`${this.endPoint}/idWithPlatillos/${id}`)
      .map( res => res.json() || {} )
      .catch( error => JSON.stringify(error) );
  }
  public simpleUpdate( comboId, data ): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', JSON.parse(localStorage.getItem('pidelacomida.token')));
    return this.http.patch(`${this.endPoint}/${comboId}`, data, { headers: headers })
      .map( res => res.json() || {} )
      .catch( error => JSON.stringify(error) );
  }
}
