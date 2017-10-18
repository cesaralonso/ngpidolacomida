import { Router } from '@angular/router';
import { PersonResponseInterface } from './person.response.interface';
import { PersonInterface } from './person.interface';
import { RegisterService } from './register.service';
import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';



@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {

  public form: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public telefono: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;

  public submitted = false;

  constructor(fb: FormBuilder, private registerService: RegisterService, private router: Router) {

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'telefono': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(15)])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.telefono = this.form.controls['telefono'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];

  }

  public onSubmit(values: any): void {
    this.submitted = true;
    if (this.form.valid) {
      const person: PersonInterface = {
        email: values.email,
        password: values.passwords.password,
        name: values.name
      }
      this.registerService.addUser(person)
        .subscribe(
            (response: PersonResponseInterface) => this.showModal(response));
    }
  }

  private showModal(response: PersonResponseInterface) {
    if (response.id) {
      console.log('registrado');
      this.router.navigate(['login']);
    } else {
      console.log('error de registro');
    }
  }

}
