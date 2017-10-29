import { AlertModalComponent } from './../../../../shared/alert-modal/alert-modal.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { PlatilloService } from './../../../../shared/services/platillo.service';
import { PlatilloInterface } from './../../../../shared/models/platillo.model';
import { RestaurantePlatilloService } from './../../../../shared/services/restaurante-platillo.service';
import { RestaurantePlatilloInterface } from './../../../../shared/models/restaurante-platillo.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-platillo-edit',
  templateUrl: './platillo-edit.component.html',
  styleUrls: ['./platillo-edit.component.css']
})
export class PlatilloEditComponent implements OnInit {
  public titulo = 'Editar datos del platillo';
  public textColor = '#444';

  public restaurantePlatillo: RestaurantePlatilloInterface = {
    descripcion: '',
    precio: 0,
    tiempoPreparacionForView: new Date()
  };
  public platillo: PlatilloInterface = {
    nombre: '',
    descripcion: ''
  };
  constructor(
    activatedRoute: ActivatedRoute,
    private restaurantePlatilloService: RestaurantePlatilloService,
    private platilloService: PlatilloService,
    private dialogService: DialogService,
    private location: Location
  ) {
    activatedRoute.params
      .flatMap( parameters => {
        const id = parameters['id'];
        return this.platilloService.findById(id);
      })
      .flatMap( res => {
        if ( res.success ) {
          this.platillo = res.result;
          return this.restaurantePlatilloService.getByParam( 'platillo_idplatillo', this.platillo.idplatillo);
        }
      })
      .subscribe( platilloInfo => {
        if ( platilloInfo.success ) {
          this.restaurantePlatillo = platilloInfo.result[0];
          // Asigna las horas y minutos
          const hours: number = this.restaurantePlatillo.tiempopreparacion.substring(0, 2);
          const minutes: number = this.restaurantePlatillo.tiempopreparacion.substring(3, 5);
          this.restaurantePlatillo.tiempoPreparacionForView = new Date();
          this.restaurantePlatillo.tiempoPreparacionForView.setHours(hours || 0);
          this.restaurantePlatillo.tiempoPreparacionForView.setMinutes(minutes || 0);
        }
      });
   }

  ngOnInit() {
  }

  onSubmitPlatillo( values ) {
    // Asigna el tiempo de preparación
    // tslint:disable-next-line:max-line-length
    this.restaurantePlatilloService.update( this.restaurantePlatillo )
      .subscribe( res => {
        if ( res.success && res.result.affectedRows > 0) {
          this.dialogService.addDialog(AlertModalComponent, {
            title: 'Platillo actualizado',
            message: 'Su platillo ha sido actualizado'
          }).subscribe( ok => this.location.back() )
        }
      })
  }
}
