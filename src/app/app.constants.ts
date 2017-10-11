import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {

  public Server: string = 'https://localhost:3001/';
  public ApiUrl: string = 'api/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;

}
