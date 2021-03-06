import { UserInterface } from './../models/user.model';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { BasicRequestsService } from './basic-requests.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService extends BasicRequestsService {

  constructor( protected htttp: Http ) {
    super( htttp, '/user', false);
  }

  public register( user: UserInterface ): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.endPoint}/register`, user, { headers: headers })
      .map( res => res.json() || {})
      .catch( error => JSON.stringify(error));
  }

  public login( email: string, password: string ): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.endPoint}/login`, {email: email, password: password}, { headers: headers })
      .map( res => res.json() || {})
      .catch( error => JSON.stringify(error));
  }
}
