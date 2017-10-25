import { Http } from '@angular/http';
import { BasicRequestsService } from './basic-requests.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DireccionService extends BasicRequestsService {

  constructor ( http: Http ) {
    super(http, '/direccion', true);
  }


}
