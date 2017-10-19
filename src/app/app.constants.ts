import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {

  public static HOST = 'http://localhost:3000';
  public Server: string = 'http://pidolacomidalb.herokuapp.com/';
  public ApiUrl: string = 'api/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;


}
