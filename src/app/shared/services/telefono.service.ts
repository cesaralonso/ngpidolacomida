import { TelefonoInterface } from './../models/telefono.model';
import { Configuration } from './../../app.constants';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class TelefonoService {
  private endPoint: string;
  constructor (
    private http: Http,
    configuration: Configuration
  ) {
    this.endPoint = `${configuration.HOST}/telefono`;
  }

  public all(): Observable<TelefonoInterface[]> {
    return this.http.get(`${this.endPoint}`)
      .map(res => res.json() || { })
      .catch(err =>  JSON.stringify(err));
  }

  public create(product: TelefonoInterface): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.endPoint}`, product, {headers: headers})
      .map( res => res.json() || {})
      .catch( error => JSON.stringify(error));
  }

  public findById( id ): Observable<TelefonoInterface> {
    return this.http.get(`${this.endPoint}/${id}`)
      .map( res => res.json() || {} )
      .catch( error => JSON.stringify(error) );
  }

}
