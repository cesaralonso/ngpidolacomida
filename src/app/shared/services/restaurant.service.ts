import { BasicRequestsService } from './basic-requests.service';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantService extends BasicRequestsService {
  constructor ( protected http: Http ) {
    super(http, '/restaurante', true);
  }

}
