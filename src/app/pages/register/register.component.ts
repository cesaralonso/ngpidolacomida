import { RolInterface } from './../../shared/models/rol.model';
import { RolService } from './../../shared/services/rol.service';
import { UserInterface } from './../../shared/models/user.model';
import { TelefonoInterface } from './../../shared/models/telefono.model';
import { UserService } from './../../shared/services/user.service';
import { TelefonoService } from './../../shared/services/telefono.service';
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
  public apellidos: AbstractControl;
  public email: AbstractControl;
  public telefono: AbstractControl;
  public lada: AbstractControl;
  public compania: AbstractControl;
  public password: AbstractControl;
  public repeatPassword: AbstractControl;
  public passwords: FormGroup;

  public submitted = false;
  public roles: RolInterface[];
  constructor(
      fb: FormBuilder,
      private registerService: RegisterService,
      private router: Router,
      private telefonoService: TelefonoService,
      private userService: UserService,
      private rolService: RolService
    ) {

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'apellidos': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'telefono': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(15)])],
      'lada': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(15)])],
      'compania': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(15)])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.name = this.form.controls['name'];
    this.apellidos = this.form.controls['apellidos'];
    this.email = this.form.controls['email'];
    this.telefono = this.form.controls['telefono'];
    this.lada = this.form.controls['lada'];
    this.compania = this.form.controls['compania'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];

    // Get the rol data
    rolService.all().subscribe( res => this.roles = res.result );
  }

  public onSubmit(values: any): void {
    const telefono: TelefonoInterface = {
      numero: values.telefono,
      lada: values.lada,
      compania: values.compania
    };
    const user: UserInterface = {
      nombres: '',
      apellidos: '',
      email: '',
      password: '',
      telefono_idtelefono: '',
      rol_idrol: ''
    };
    if ( this.form.valid ) {
      this.telefonoService.create( telefono )
        .flatMap( res => this.userService.create( user ))
        .subscribe( res => console.log(res));

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
