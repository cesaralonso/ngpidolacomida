import { AlertModalComponent } from './../../../../shared/alert-modal/alert-modal.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { ComboService } from './../../../../shared/services/combo.service';
import { ActivatedRoute } from '@angular/router';
import { RestaurantePlatilloService } from './../../../../shared/services/restaurante-platillo.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-combo-create',
  templateUrl: './combo-create.component.html',
  styleUrls: ['./combo-create.component.css'],
  providers: [
    RestaurantePlatilloService,
    ComboService
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
  public nombre: AbstractControl;
  public descripcion: AbstractControl;
  public precio: AbstractControl;
  public platillo: AbstractControl;
  public fechaIni: AbstractControl;
  public fechaFin: AbstractControl;

  constructor(
    formBuilder: FormBuilder,
    activatedRoute: ActivatedRoute,
    private restaurantePlatilloService: RestaurantePlatilloService,
    private comboService: ComboService,
    private dialogService: DialogService,
    private location: Location
  ) {
    activatedRoute.params.subscribe( parameters => {
      this.restauranteId = parameters['restauranteId'];
    })
    this.formGroup = formBuilder.group({
      'nombre': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'descripcion': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'precio': ['', Validators.compose([Validators.required])],
      'fechaIni': ['', Validators.compose([Validators.required])],
      'fechaFin': ['', Validators.compose([Validators.required])]
    });
    this.nombre = this.formGroup.controls['nombre'];
    this.descripcion = this.formGroup.controls['descripcion'];
    this.precio = this.formGroup.controls['precio'];
    this.fechaIni = this.formGroup.controls['fechaIni'];
    this.fechaFin = this.formGroup.controls['fechaFin'];
  }

  ngOnInit() {
    this.getPlatillosFromAPI()
  }
  getPlatillosFromAPI() {
    this.restaurantePlatilloService.getByParam( 'restaurante_idrestaurante', this.restauranteId)
      .subscribe( res => res.success ? this.platillosFromAPI = res.result : null)
  }
  onChangePlatillo( platillo_idplatillo  ) {
    this.selectedPlatillo = this.getPlatilloFromList( platillo_idplatillo );
  }
  addPlatillo() {
    if ( this.verifyRepeat() === -1 ) {
      if ( this.selectedPlatillo !== undefined && this.selectedPlatillo !== '') {
        // Asigna una cantidad inicial de 1 al nuevo platillo agregado al combo
        this.selectedPlatillo.cantidad = 1;
        this.platillos.push(this.selectedPlatillo);
      }
    }
  }
  // Retorna -1 si no se encuentra repetido, de 0 en adelante significa que ya se encuentra en platillos
  verifyRepeat() {
    return this.platillos.indexOf(this.selectedPlatillo)
  }
  setCantidad( cantidad, platillo ) {
    const index = this.platillos.indexOf(platillo);
    this.platillos[index].cantidad = cantidad;
  }
  removeFromPlatillos( platillo ) {
    const index = this.platillos.indexOf(platillo);
    this.platillos.splice(index, 1);
  }
  onSubmitCombo( values: any ) {
    values.platillos = this.platillos;
    values.restaurante_idrestaurante = this.restauranteId;
    console.log(values)
    this.comboService.create( values )
      .subscribe( res => {
        if ( res.success && res.result.insertId > 0 ) {
          this.dialogService.addDialog( AlertModalComponent, {
            title: 'Combo agregado a la lista',
            message: '¡Su combo ha sido agregado satisfactoriamente!'
          }).subscribe( ok => this.location.back())
        }
      })
  }

  getPlatilloFromList( platillo_idplatillo ) {
    for (let i = 0; i < this.platillosFromAPI.length; i++) {
      if (parseInt(this.platillosFromAPI[i].platillo_idplatillo, 10) === parseInt(platillo_idplatillo, 10)) {
        return this.platillosFromAPI[i]
      }
    }
    return null;
  }

}
