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
  selector: 'app-combo-edit',
  templateUrl: './combo-edit.component.html',
  styleUrls: ['./combo-edit.component.css'],
  providers: [
    RestaurantePlatilloService,
    ComboService
  ]
})
export class ComboEditComponent implements OnInit {
  public tituloHeader = 'Editar combo';
  public textColor = '#444';
  public comboId: string;
  public restauranteId: string;
  public selectedPlatillo: any;
  public platillos = [];
  public platillosFromAPI: any[] = [];
  public combo = {
    fechaIni: ''
  }
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

    activatedRoute.params.flatMap( parameters => { // Obtiene comboId por URI
      this.comboId = parameters['comboId'];
      this.restauranteId = parameters['restauranteId'];
      return this.comboService.findByIdWithPlatillos( this.comboId )
    })
    .flatMap( comboInfo => { // Obtiene el combo con sus platillos
      if ( comboInfo.success ) {
         this.combo = comboInfo.result;
         this.combo.fechaIni = comboInfo.result.fecha_ini;
         this.platillos = comboInfo.result.platillos;
      }
      return this.restaurantePlatilloService.getByParam( 'restaurante_idrestaurante', this.restauranteId);
    })
    .subscribe( platillosInfo => { // Obtiene todos los platillos del restaurante
      if ( platillosInfo.success ) {
        this.platillosFromAPI = platillosInfo.result;
      }
    })
  }

  ngOnInit() {
  }

  onChangePlatillo( platillo_idplatillo  ) {
    this.selectedPlatillo = this.getPlatilloFromList( platillo_idplatillo );
    console.log(this.selectedPlatillo);
  }
  addPlatillo() {
    if ( this.selectedPlatillo !== undefined && this.selectedPlatillo !== '') {
      if ( this.verifyRepeat() === -1 ) {
        this.platillos.push({
          cantidad: 1,
          descripcion: this.selectedPlatillo.descripcion,
          nombre: this.selectedPlatillo.platilloInfo.nombre,
          idplatillo: this.selectedPlatillo.platillo_idplatillo
        });
      }
    }
  }
  // Retorna -1 si no se encuentra repetido, de 0 en adelante significa que ya se encuentra en platillos
  verifyRepeat() {

    for (let i = 0; i < this.platillos.length; i++) {
      if ( this.platillos[i].idplatillo === this.selectedPlatillo.platillo_idplatillo ) {
        return i;
      }
    }
    return -1;
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
    values.idcombo = this.comboId;
    this.comboService.update( values )
      .subscribe( res => {
        console.log(res)
        if ( res.success && res.result.affectedRows > 0 ) {
          this.dialogService.addDialog( AlertModalComponent, {
            title: 'Combo modificado a la lista',
            message: '¡Su combo ha sido modificado satisfactoriamente!'
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
