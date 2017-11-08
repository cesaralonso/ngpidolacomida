import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BasicRequestsService } from './basic-requests.service';
import { ComboInterface } from '../models/combo.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ImageService extends BasicRequestsService {

  constructor ( protected http: Http ) {
    super(http, '/image', true);
  }
}
