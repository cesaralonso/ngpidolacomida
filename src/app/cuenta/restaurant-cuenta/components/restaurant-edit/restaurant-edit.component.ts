import { RestauranteInterface } from './../../../../shared/models/restaurante.model';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {
  public restaurante: RestauranteInterface;
  public titulo = 'Editar datos de restaurante';
  public textColor = '#444';
  public formGroup: FormGroup;

  public nombre: AbstractControl;
  public razonSocial: AbstractControl;
  public rfc: AbstractControl;
  public direccion: AbstractControl;
  public descripcion: AbstractControl;


  constructor(
    formBuilder: FormBuilder,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe( parameters => {
      const id = parameters['id'];
      this.getRestaurant( id );
    });

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

  getRestaurant( id: string) {
    // While service not working
    // this.restaurante = {
    //   nombre: 'La parrilla',
    //   razonSocial: 'Razon',
    //   rfc: 'LPABV3416A',
    //   direccion: 'Ramón Corona #107',
    //   descripcion: 'Restaurante de comida rapida, rica y deliciosa.'
    // };
  }

}
