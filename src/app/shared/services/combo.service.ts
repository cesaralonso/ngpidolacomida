import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
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
}
