import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {

  // public Server: string = 'http://pidolacomidalb.herokuapp.com/';
  public Server: string = 'http://localhost/pidolacomidaslim/';
  public ApiUrl: string = 'api/v1/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;

}
