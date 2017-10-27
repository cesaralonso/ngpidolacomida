import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { BasicRequestsService } from './basic-requests.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PlatilloHorarioService extends BasicRequestsService {

  constructor ( protected http: Http ) {
    super(http, '/platilloHorario', true);
  }

  public removeHorario( platilloId, horaIni, horaFin, semanaId ): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    headers.append('Authorization', JSON.parse(localStorage.getItem('pidelacomida.token')));
    return this.http.delete(`${this.endPoint}/${platilloId}/${horaIni}/${horaFin}/${semanaId}`, { headers: headers })
      .map( res => res.json() || {})
      .catch( error => JSON.stringify(error));
  }

}
