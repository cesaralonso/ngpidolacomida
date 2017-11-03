import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { BasicRequestsService } from './basic-requests.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PlatilloIngredienteService extends BasicRequestsService {

  constructor ( protected http: Http ) {
    super(http, '/platilloIngrediente', true);
  }


  public allIngredientes( restauranteId, platilloId ): Observable<any> {
    return this.http.get(`${this.endPoint}/${restauranteId}/${platilloId}`)
      .map(res => res.json() || { } )
      .catch(err =>  JSON.stringify(err));
  }

  public findById( id ): Observable<any> {
    return this.http.get(`${this.endPoint}/${id}`)
      .map( res => res.json() || {} )
      .catch( error => JSON.stringify(error) );
  }

  public create( model ): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    if ( this.requireAuthentication ) {
      headers.append('Authorization', JSON.parse(localStorage.getItem('pidelacomida.token')));
    }
    return this.http.post(`${this.endPoint}`, model, { headers: headers })
      .map( res => res.json() || {})
      .catch( error => JSON.stringify(error));
  }

  public remove( id ): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    headers.append('Authorization', JSON.parse(localStorage.getItem('pidelacomida.token')));
    return this.http.delete(`${this.endPoint}/${id}`, { headers: headers })
      .map( res => res.json() || {})
      .catch( error => JSON.stringify(error));
  }

}
