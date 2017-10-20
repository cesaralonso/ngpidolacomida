import { RestaurantePlatilloService } from './../../../../shared/services/restaurante-platillo.service';
import { ActivatedRoute } from '@angular/router';
import { RestaurantePlatilloInterface } from './../../../../shared/models/restaurante-platillo.model';
import { PlatilloService } from './../../../../shared/services/platillo.service';
import { PlatilloInterface } from './../../../../shared/models/platillo.model';
import { TipoComidaInterface } from './../../../../shared/models/tipo-comida.model';
import { TipoComidaService } from './../../../../shared/services/tipo-comida.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillo-create',
  templateUrl: './platillo-create.component.html',
  styleUrls: ['./platillo-create.component.css']
})
export class PlatilloCreateComponent implements OnInit {
  public titulo = 'Registrar platillo';
  public textColor = '#444';
  public isMeridian = false;
  public horarioInicial: Date = new Date(); // Hora de abrir
  public horarioFinal: Date = new Date(); // Hora de cerrar

  public selectedIngrediente: any;
  public ingredientes = [];
  // Nuevo platillo
  public newPlatillo: PlatilloInterface = {
    idplatillo: null,
    nombre: '',
    descripcion: '',
    precio: 0,
    img: '',
    tipoComida_idtipoComida: ''
  };
  // Nuevo restaurante_has_platillo
  public newRestaurantePlatillo: RestaurantePlatilloInterface =  {
    descripcion: '',
    precio: 0,
    tiempoPreparacionForView: new Date(),
    tiempopreparacion: new Date()
  };
  // Tipos de comidass
  public tipoComidas: TipoComidaInterface;
  // Platillos existentes
  public platillosExistentes: PlatilloInterface[];
  // Verificar si seleccionó un platillo existente
  public platilloSeleccionado = false;
  // Contiene el idrestaruante de la URI
  public restauranteId: string;

  constructor(
    private tipoComidaService: TipoComidaService,
    private platilloService: PlatilloService,
    activatedRoute: ActivatedRoute,
    private restaurantePlatilloService: RestaurantePlatilloService
  ) {
    // Get idrestaurant from URI param
    activatedRoute.params
      .subscribe( parameters => this.restauranteId = parameters['restauranteId'] );
    // Set hours to zero
    this.newRestaurantePlatillo.tiempoPreparacionForView.setHours(0);
    this.newRestaurantePlatillo.tiempoPreparacionForView.setMinutes(0);
    this.horarioInicial.setHours(0);
    this.horarioInicial.setMinutes(0);
    this.horarioFinal.setHours(0);
    this.horarioFinal.setMinutes(0);
   }

  ngOnInit() {
    this.getTipoComida();
    this.getPlatillos();
  }
  onSubmitPlatillo( values ) {
    this.newRestaurantePlatillo.restaurante_idrestaurante = this.restauranteId;
    this.newRestaurantePlatillo.descripcion = this.newPlatillo.descripcion;
    // Seleccionó un platillo existente
    if ( this.platilloSeleccionado && this.newPlatillo.idplatillo ) {
      this.newRestaurantePlatillo.platillo_idplatillo = this.newPlatillo.idplatillo;
      this.platilloService.update(this.newPlatillo)
        .flatMap( res => {
          if ( res.success ) {
            console.log(res.result);
            return this.restaurantePlatilloService.create( this.newRestaurantePlatillo );
          } else {
            console.log( 'Error: ', res );
          }
        })
        .subscribe( res => {
          console.log( res );
        });

    } else { // Es un nuevo platillo creado por el restaurante
      this.platilloService.create( this.newPlatillo )
        .flatMap( res => {
          if ( res.success ) {
            console.log(res.result);
            this.newRestaurantePlatillo.platillo_idplatillo = res.result.insertId;
            return this.restaurantePlatilloService.create( this.newRestaurantePlatillo );
          } else {
            console.log('Error: ', res);
          }
        })
        .subscribe( res => {
          if ( res.success ) {
            console.log('Nailed it: ', res);
          } else {
            console.log( res );
          }
        });
    }
  }
  onChangeIngrediente( ingrediente ) {
    this.selectedIngrediente = ingrediente;

  }
  addIngrediente() {
    if ( this.selectedIngrediente !== undefined && this.selectedIngrediente !== '') {
      this.ingredientes.push(this.selectedIngrediente);
    }
  }
  crear() {
    this.newPlatillo = {
      idplatillo: null,
      nombre: '',
      descripcion: '',
      precio: 0,
      img: '',
      tipoComida_idtipoComida: ''
    };
    this.setPlatilloSeleccionado(false);
  }
  removeFromIngredientes( ingrediente ) {
    const index = this.ingredientes.indexOf(ingrediente);
    this.ingredientes.splice(index, 1);
  }

  seleccionarPlatillo( platilloId ) {
    this.platilloService.findById( platilloId )
    .subscribe( res => {
      if ( res.success ) {
        this.newPlatillo.idplatillo = res.result.idplatillo;
        this.newPlatillo.nombre = res.result.nombre;
        this.newPlatillo.descripcion = res.result.descripcion;
        this.newPlatillo.tipoComida_idtipoComida = res.result.tipoComida_idtipoComida;
      }
    });
    this.setPlatilloSeleccionado(true);
  }
  setPlatilloSeleccionado( isSelected ) {
    this.platilloSeleccionado = isSelected;
  }
  getTipoComida() {
    this.tipoComidaService.all()
      .subscribe( res => res.success ? this.tipoComidas = res.result : null );
  }
  getPlatillos() {
    this.platilloService.all()
      .subscribe( res => res.success ? this.platillosExistentes = res.result : null);
  }

}
