import { ConfirmModalComponent } from './../../../../shared/confim-modal/confirm-modal.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { ComboInterface } from './../../../../shared/models/combo.model';
import { ComboService } from './../../../../shared/services/combo.service';
import { RestaurantePlatilloInterface } from './../../../../shared/models/restaurante-platillo.model';
import { RestaurantePlatilloService } from './../../../../shared/services/restaurante-platillo.service';
import { RestaurantService } from './../../../../shared/services/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-show',
  templateUrl: './restaurant-show.component.html',
  styleUrls: ['./restaurant-show.component.css'],
  providers: [
    RestaurantePlatilloService,
    ComboService
  ]
})
export class RestaurantShowComponent implements OnInit {
  public titulo = 'Mi restaurante';
  public textColor = '#444';

  // Platillos del restaurante
  public misPlatillos: RestaurantePlatilloInterface[];
  public misCombos: ComboInterface[];
  // Obtiene el id del restaurante
  public restauranteId: string;
  constructor(
    private restaurantService: RestaurantService,
    private restaurantePlatilloService: RestaurantePlatilloService,
    private comboService: ComboService,
    private dialogService: DialogService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params
    .flatMap( parameters => {// Obtiene el id del restaurante por URI
      this.restauranteId = parameters['id'];
      return this.restaurantService.findById( this.restauranteId );
    })
    .flatMap( restauranteInfo => {// Obtiene los datos del restaurante
      if ( restauranteInfo.success ) {
        this.titulo = restauranteInfo.result.nombre;
        return this.restaurantePlatilloService.getByParam( 'restaurante_idrestaurante', restauranteInfo.result.idrestaurante);
      }
    })
    .flatMap( platillosInfo => {// Obtiene los platillos del restaurante
      if ( platillosInfo.success ) {
        this.misPlatillos = platillosInfo.result;
        console.log(this.misPlatillos)
        return this.comboService.getByParam( 'restaurante_idrestaurante', this.restauranteId);
      }
    })
    .subscribe( res => {// Obtiene los combos del restaurante
      if ( res.success ) {
        this.misCombos = res.result;
      }
    })
  }

  ngOnInit() {
  }

  getRestaurant( id ) {
    this.restaurantService.findById( id )
      .subscribe( res => console.log(res));
  }
  getCombos() {
    this.comboService.getByParam( 'restaurante_idrestaurante', this.restauranteId)
      .subscribe( res => {
        if ( res.success ) {
          this.misCombos = res.result;
        }
      })
  }
  deleteCombo( combo ) {
    this.confirmDelete()
      .then( ok => {
        if ( ok )
          this.comboService.simpleUpdate( combo.idcombo, { baja: true })
            .subscribe( res =>
              res.success
                ? this.removeComboFromArray(combo)
                : null
            )
      })
  }
  removeComboFromArray( combo ) {
    const index = this.misCombos.indexOf( combo )
    if ( index >= 0 )
      this.misCombos.splice(index, 1)
  }
  confirmDelete(): Promise<Boolean> {
    return new Promise( resolve => {
      this.dialogService.addDialog( ConfirmModalComponent, {
        titulo: 'Eliminar combo de mi restaurante',
        descripcion: '¿Estás seguro que deseas borrar este combo? Una vez eliminado, ya no podrás recuperarlo.'
      }).subscribe( ok => ok ? resolve(true) : resolve(false))

    })
  }
}
