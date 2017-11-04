import { Observable } from 'rxjs/Observable';
import { ConfirmModalComponent } from './../../../../shared/confim-modal/confirm-modal.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { BasicRequestsService } from './../../../../shared/services/basic-requests.service';
import { PlatilloIngredienteService } from './../../../../shared/services/platillo-ingrediente.service';
import { ActivatedRoute } from '@angular/router';
import { PlatilloIngredienteInterface } from './../../../../shared/models/platillo-ingrediente.model';
import { IngredienteInterface } from './../../../../shared/models/ingrediente.model';
import { IngredienteService } from './../../../../shared/services/ingrediente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillo-ingrediente',
  templateUrl: './platillo-ingrediente.component.html',
  styleUrls: ['./platillo-ingrediente.component.css'],
  providers: [
    IngredienteService,
    PlatilloIngredienteService
  ]
})
export class PlatilloIngredienteComponent implements OnInit {
  public titulo = 'Agrega ingredientes a tu platillo';
  public textColor = '#444';

  public restauranteId: string;
  public platilloId: string;
  // Obtiene la unidad de medida del ingrediente seleccionado del select tag
  public unidadMedida: string;
  // Contiene todos los ingredientes traidos desde la API
  public ingredientes: IngredienteInterface[] = [];
  // Contiene el ingrediente a crear para el restaurante
  public platilloIngrediente: PlatilloIngredienteInterface = {
    id: null,
    default: false,
    medida: null,
    precio: null
  }
  // Ingredientes que se encuentran registrados al platillo
  public ingredientesSeleccionados: PlatilloIngredienteInterface[] = [];

  constructor(
    private ingredienteService: IngredienteService,
    private platilloIngredienteService: PlatilloIngredienteService,
    private dialogService: DialogService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params
      .subscribe( parameters => {
        this.restauranteId = parameters['restauranteId'];
        this.platilloId = parameters['platilloId'];
      })
      this.unidadMedida = '';
  }

  ngOnInit() {
    this.getIngredientes()
    this.getIngredientesSeleccionados()
  }

  getIngredientes() {
    this.ingredienteService.all()
      .subscribe( ingredientesInfo =>
         ingredientesInfo.success
           ? this.ingredientes = ingredientesInfo.result
           : null )
  }

  getIngredientesSeleccionados() {
    this.platilloIngredienteService.allIngredientes( this.restauranteId, this.platilloId)
      .subscribe( res =>
        res.success
          ? this.ingredientesSeleccionados = res.result
          : null )
  }
  removeFromIngredientes( ingrediente ) {
    this.dialogService.addDialog( ConfirmModalComponent, {
      titulo: 'Eliminar ingrediente',
      descripcion: '¿Estás seguro que desear eliminar este ingrediente?'
    })
    .flatMap( confimed => // Confirm remove
      confimed
        ? this.platilloIngredienteService.remove( ingrediente.idrest_plat_ing )
        : Observable.empty<Response>() )
    .subscribe( res => // Remove ingrediente from API delete
        res.success && res.result.affectedRows > 0
          ? this.removeFromArray( ingrediente )
          : null )
  }
  setUnidadMedida( ingredienteId ) {
    const ingredienteSelecionado = this.ingredientes.filter(
      ingrediente => ingrediente.idingrediente === parseInt(ingredienteId, 10))
    this.unidadMedida = ingredienteSelecionado[0].unidad_medida
  }
  onSubmitIngrediente( values ) {
    values.restauranteId = this.restauranteId;
    values.platilloId = this.platilloId;
    if ( values.default ) {
      values.precio = 0
    }
    this.platilloIngredienteService.create( values )
      .flatMap( res => {
        if ( res.success && res.result.insertId > 0) {
          // Obtiene el id del nuevo ingrediente
          return this.platilloIngredienteService.findById( res.result.insertId )
        }
      })
      .subscribe( ingredienteInfo => {
        if ( ingredienteInfo.success && ingredienteInfo.result ) {
          this.addToArray( ingredienteInfo.result )
          this.platilloIngrediente = {
              id: null,
              default: false,
              medida: null,
              precio: null
          }
        }
      })
  }
  addToArray( ingrediente ) {
    this.ingredientesSeleccionados.push( ingrediente )
  }
  removeFromArray( ingrediente ) {
    const index = this.ingredientesSeleccionados.indexOf( ingrediente )
    this.ingredientesSeleccionados.splice( index, 1 )
  }

}
