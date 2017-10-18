import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {

  public Server: string = 'http://pidolacomidalb.herokuapp.com/';
  public ApiUrl: string = 'api/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;

  public HOST = 'http://localhost:3000';

}
