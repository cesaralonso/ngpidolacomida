import { LoginResponseInterface } from './login-response.interface';
import { LoginInterface } from './login.interface';
import { AuthService } from './../../shared/auth.service';
import { AuthLocalstorage } from './../../shared/auth-localstorage.service';
import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../theme/validators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {

  items: any;

  form: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  submitted = false;

  constructor(fb: FormBuilder,
              protected service: AuthService,
              private authLocalstorage: AuthLocalstorage,
              private router: Router,
              private toastrService: ToastrService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  onSubmit(values: LoginInterface): void {
    console.log(values);
    this.submitted = true;
    if (this.form.valid) {
      this.service.login(values)
        .subscribe( (response: LoginResponseInterface) => this.showModal(response, values));
    }
  }

  private showModal(response: LoginResponseInterface, credentials: LoginInterface) {
    console.log(response);
    if (response.success) {
      this.toastrService.success(response.message);
      this.authLocalstorage.setCredentials(credentials, response);
      this.router.navigate(['/mi-cuenta/mis-platillos']);
    } else {
      this.toastrService.error('Hubo algún error al tratar de accesar');
      this.authLocalstorage.clearAll();
    }
  }

}
