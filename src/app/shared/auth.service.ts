import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Configuration } from './../app.constants';
import { LoginInterface } from './../pages/login/login.interface';
import { LoginResponseInterface } from './../pages/login/login-response.interface';


@Injectable()
export class AuthService {

    isLoggedIn: boolean = (
        this.toBoolean(
            this.localStorageService.get('isLoggedIn') ? this.localStorageService.get('isLoggedIn') : false,
        )
    );

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    private actionUrl: string;
    private headers: Headers;

    constructor(
        private _http: Http,
        private _configuration: Configuration,
        private localStorageService: LocalStorageService) {

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    }

    toBoolean(object: any): boolean {
        return (object.toString() === 'true') ? true : false;
    }

    login(values: LoginInterface): Observable<LoginResponseInterface> {
        this.actionUrl = `${Configuration.HOST}/user/login`;
        return this._http.post(this.actionUrl, values, { headers: this.headers })
            .map((response: Response) => <LoginResponseInterface>response.json())
            .catch(this.handleError)
            .do(val => {
                this.isLoggedIn = true;
            });
    }

    logout(): void {
        this.isLoggedIn = false;
        this.localStorageService.set('isLoggedIn', false);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}
