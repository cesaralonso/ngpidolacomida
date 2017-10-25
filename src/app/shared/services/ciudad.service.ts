import { Http } from '@angular/http';
import { BasicRequestsService } from './basic-requests.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CiudadService extends BasicRequestsService {

  constructor ( http: Http ) {
    super(http, '/ciudad', true);
  }

}
