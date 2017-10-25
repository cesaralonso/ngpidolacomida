import { RestaurantService } from './../../../../shared/services/restaurant.service';
import { CiudadService } from './../../../../shared/services/ciudad.service';
import { DireccionService } from './../../../../shared/services/direccion.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css'],
  providers: [
    CiudadService,
    DireccionService,
    RestaurantService
  ]
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
  public ciudad_idciudad: AbstractControl;

  public ciudades = [];

  constructor(
    formBuilder: FormBuilder,
    private ciudadService: CiudadService,
    private direccionService: DireccionService,
    private restaurantService: RestaurantService
  ) {
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
      'ciudad_idciudad': ['', Validators.required]
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
    this.ciudad_idciudad = this.formGroup.controls['ciudad_idciudad'];

  }

  ngOnInit() {
    this.getCiudades();
  }
  getCiudades() {
    this.ciudadService.all()
      .subscribe( res => res.success ? this.ciudades = res.result : null);
  }
  onSubmitRestaurant( values: any ) {
    if ( this.formGroup.valid ) {
      this.direccionService.create( {
        calle: values.calle,
        entrecalle1: values.entrecalle1,
        entrecalle2: values.entrecalle2,
        lat: values.lat,
        lng: values.lng,
        numext: values.numext,
        numint: values.numint,
        colonia: values.colonia,
        cp: values.cp,
        ciudad_idciudad: values.ciudad_idciudad,
        principal: values.principal
      })
      .flatMap( direccionInfo => {
        if ( direccionInfo.success ) {
          console.log(direccionInfo);
          console.log(direccionInfo.result.insertId);
          return this.restaurantService.create({
            descripcion: values.descripcion,
            direccion_iddireccion: direccionInfo.result.insertId,
            razon: values.razonSocial,
            nombre: values.nombre
          });
        }
      })
      .subscribe( restaurantInfo => {
        console.log(restaurantInfo);
      },
      error => console.log('Error: ', error),
      () => console.log('Completed!'));
    }
  }

}
