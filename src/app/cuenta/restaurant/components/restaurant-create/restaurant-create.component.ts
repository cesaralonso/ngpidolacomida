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
  formGroup: FormGroup;
  nombre: AbstractControl;

  constructor(
    formBuilder: FormBuilder,
  ) {
    this.formGroup = formBuilder.group({
      'nombre': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });
    this.nombre = this.formGroup.controls['nombre'];

  }

  ngOnInit() {
  }

  onSubmitRestaurant(  ) {
    if ( this.formGroup.valid ) {
      console.log('Submit!');
    }
  }

}
