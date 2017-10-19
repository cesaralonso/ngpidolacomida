import { TelefonoInterface } from './../models/telefono.model';
import { Observable } from 'rxjs/Observable';
import { Configuration } from './../../app.constants';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BasicRequestsService {
  protected endPoint: string;
  constructor( protected http: Http, endPoint: string ) {
    this.endPoint = Configuration.HOST + endPoint;
  }

  public all(): Observable<any> {
    return this.http.get(`${this.endPoint}`)
      .map(res => res.json() || { } )
      .catch(err =>  JSON.stringify(err));
  }

  public findById( id ): Observable<any> {
    return this.http.get(`${this.endPoint}/${id}`)
      .map( res => res.json() || {} )
      .catch( error => JSON.stringify(error) );
  }

  public count(): Observable<any> {
    return this.http.get(`${this.endPoint}/count`)
      .map( res => res.json() || {} )
      .catch( error => JSON.stringify(error) );
  }

  public create( model ): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.endPoint}`, model, { headers: headers })
      .map( res => res.json() || {})
      .catch( error => JSON.stringify(error));
  }

}