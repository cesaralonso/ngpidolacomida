import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css']
})
export class RestaurantCreateComponent implements OnInit {
  public titulo = 'Registrar restaurante';
  public textColor = '#444';
  public formGroup: FormGroup;

  public nombre: AbstractControl;
  public razonSocial: AbstractControl;
  public descripcion: AbstractControl;
  public calle: AbstractControl;
  public entrecalle1: AbstractControl;
  public entrecalle2: AbstractControl;
  public lat: AbstractControl;
  public lng: AbstractControl;
  public numint: AbstractControl;
  public numext: AbstractControl;
  public colonia: AbstractControl;
  public cp: AbstractControl;
  public principal: AbstractControl;
  public ciudad: AbstractControl;

  public ciudades = [
    'uno',
    'dos'
  ];

  constructor( formBuilder: FormBuilder ) {
    this.formGroup = formBuilder.group({
      'nombre': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'razonSocial': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'descripcion': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'calle': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'entrecalle1': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'entrecalle2': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'lat': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'lng': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'numint': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'numext': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'colonia': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'cp': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],
      'principal': '',
      'ciudad': ['', Validators.required]
    });
    this.nombre = this.formGroup.controls['nombre'];
    this.razonSocial = this.formGroup.controls['razonSocial'];
    this.descripcion = this.formGroup.controls['descripcion'];
    this.calle = this.formGroup.controls['calle'];
    this.entrecalle1 = this.formGroup.controls['entrecalle1'];
    this.entrecalle2 = this.formGroup.controls['entrecalle2'];
    this.lat = this.formGroup.controls['lat'];
    this.lng = this.formGroup.controls['lng'];
    this.numint = this.formGroup.controls['numint'];
    this.numext = this.formGroup.controls['numext'];
    this.colonia = this.formGroup.controls['colonia'];
    this.cp = this.formGroup.controls['cp'];
    this.principal = this.formGroup.controls['principal'];
    this.ciudad = this.formGroup.controls['ciudad'];

  }

  ngOnInit() {
  }

  onSubmitRestaurant( values: any ) {
    if ( this.formGroup.valid ) {
      console.log(values);
    }
  }

}
