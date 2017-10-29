import { AlertModalComponent } from './../../../../shared/alert-modal/alert-modal.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { CiudadService } from './../../../../shared/services/ciudad.service';
import { RestaurantService } from './../../../../shared/services/restaurant.service';
import { RestauranteInterface } from './../../../../shared/models/restaurante.model';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css'],
  providers: [
    RestaurantService
  ]
})
export class RestaurantEditComponent implements OnInit {
  public restaurante: RestauranteInterface = {
    descripcion: '',
    razon: '',
    nombre: '',
  };
  public ciudades: any;
  public titulo = 'Editar datos de restaurante';
  public textColor = '#444';
  public formGroup: FormGroup;

  public nombre: AbstractControl;
  public razon: AbstractControl;
  public descripcion: AbstractControl;

  constructor(
    formBuilder: FormBuilder,
    activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private dialogService: DialogService
  ) {
    activatedRoute.params.subscribe( parameters => {
      const id = parameters['id'];
      this.getRestaurant( id );
    });

    this.formGroup = formBuilder.group({
      'nombre': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'razon': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'descripcion': ['', Validators.compose([Validators.required, Validators.minLength(2)])],

    });

    this.nombre = this.formGroup.controls['nombre'];
    this.razon = this.formGroup.controls['razon'];
    this.descripcion = this.formGroup.controls['descripcion'];
  }

  ngOnInit() {
  }

  onSubmitRestaurant( values: any ) {
    values.idrestaurante = this.restaurante.idrestaurante;
    this.restaurantService.update( values )
      .subscribe( res => {
        if ( res.success && res.result.affectedRows > 0) {
          this.dialogService.addDialog( AlertModalComponent, {
            title: 'Datos actualizados',
            message: 'Los datos de su restaurante han sido actualizados con éxito'
          })
        }
      })
  }

  getRestaurant( id: string) {
    this.restaurantService.findById( id )
      .subscribe( res => res.success ? this.restaurante = res.result : null)
  }

}
