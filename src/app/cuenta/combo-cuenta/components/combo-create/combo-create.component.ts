import { ActivatedRoute } from '@angular/router';
import { RestaurantePlatilloService } from './../../../../shared/services/restaurante-platillo.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-create',
  templateUrl: './combo-create.component.html',
  styleUrls: ['./combo-create.component.css'],
  providers: [
    RestaurantePlatilloService
  ]
})
export class ComboCreateComponent implements OnInit {
  public tituloHeader = 'Crear un nuevo combo';
  public textColor = '#444';
  public restauranteId: string;
  public selectedPlatillo: any;
  public platillos = [];
  public platillosFromAPI: any[] = [];
  // Form validation
  public formGroup: FormGroup;
  public titulo: AbstractControl;
  public descripcion: AbstractControl;
  public precio: AbstractControl;
  public platillo: AbstractControl;

  constructor(
    formBuilder: FormBuilder,
    activatedRoute: ActivatedRoute,
    private restaurantePlatilloService: RestaurantePlatilloService
  ) {
    activatedRoute.params.subscribe( parameters => {
      this.restauranteId = parameters['restauranteId'];
    })
    this.formGroup = formBuilder.group({
      'titulo': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'descripcion': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'precio': ['', Validators.compose([Validators.required])]
    });
    this.titulo = this.formGroup.controls['titulo'];
    this.descripcion = this.formGroup.controls['descripcion'];
    this.precio = this.formGroup.controls['precio'];
  }

  ngOnInit() {
    this.getPlatillosFromAPI()
  }
  getPlatillosFromAPI() {
    this.restaurantePlatilloService.getByParam( 'restaurante_idrestaurante', this.restauranteId)
      .subscribe( res => res.success ? this.platillosFromAPI = res.result : null)
  }
  onChangePlatillo( platillo ) {
    this.selectedPlatillo = platillo;
  }
  addPlatillo() {
    if ( this.selectedPlatillo !== undefined && this.selectedPlatillo !== '') {
      this.platillos.push(this.selectedPlatillo);
    }
  }

  removeFromPlatillos( platillo ) {
    const index = this.platillos.indexOf(platillo);
    this.platillos.splice(index, 1);
  }

  onSubmitCombo( values: any ) {
    if ( this.formGroup.valid ) {
      console.log(values);
    }
  }

}
