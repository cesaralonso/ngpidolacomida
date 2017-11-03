import { Http } from '@angular/http';
import { BasicRequestsService } from './basic-requests.service';
import { Injectable } from '@angular/core';

@Injectable()
export class IngredienteService extends BasicRequestsService {

  constructor ( protected http: Http ) {
    super(http, '/ingrediente', true);
  }

}
