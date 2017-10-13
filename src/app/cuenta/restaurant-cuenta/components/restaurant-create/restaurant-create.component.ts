import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css']
})
export class RestaurantCreateComponent implements OnInit {
  public titulo = 'Registrar restaurante';
  public textColor = '#3D3D3D';
  public formGroup: FormGroup;

  public nombre: AbstractControl;
  public razonSocial: AbstractControl;
  public rfc: AbstractControl;
  public direccion: AbstractControl;
  public descripcion: AbstractControl;

  constructor( formBuilder: FormBuilder ) {
    this.formGroup = formBuilder.group({
      'nombre': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'razonSocial': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'rfc': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'direccion': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'descripcion': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });
    this.nombre = this.formGroup.controls['nombre'];
    this.razonSocial = this.formGroup.controls['razonSocial'];
    this.rfc = this.formGroup.controls['rfc'];
    this.direccion = this.formGroup.controls['direccion'];
    this.descripcion = this.formGroup.controls['descripcion'];

  }

  ngOnInit() {
  }

  onSubmitRestaurant( values: any ) {
    if ( this.formGroup.valid ) {
      console.log(values);
    }
  }

}
