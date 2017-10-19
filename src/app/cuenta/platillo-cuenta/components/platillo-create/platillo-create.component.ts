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
  public tiempoPreparacionPicker: Date = new Date(); // Tiempo de preparacion
  public horarioInicial: Date = new Date(); // Hora de abrir
  public horarioFinal: Date = new Date(); // Hora de cerrar

  public selectedIngrediente: any;
  public ingredientes = [];
  // Nuevo platillo
  public newPlatillo: PlatilloInterface = {
    nombre: '',
    descripcion: '',
    precio: 0,
    img: '',
    idplatillo: 0,
    tipoComida_idtipoComida: ''
  };

  // Tipos de comidass
  public tipoComidas: TipoComidaInterface;
  // Platillos existentes
  public platillosExistentes: PlatilloInterface[];
  // Verificar si seleccionó un platillo existente
  public platilloSeleccionado = false;

  constructor(
    private tipoComidaService: TipoComidaService,
    private platilloService: PlatilloService
  ) {
    // Set hours to zero
    this.tiempoPreparacionPicker.setHours(0);
    this.tiempoPreparacionPicker.setMinutes(0);
    this.horarioInicial.setHours(0);
    this.horarioInicial.setMinutes(0);
    this.horarioFinal.setHours(0);
    this.horarioFinal.setMinutes(0);
   }

  ngOnInit() {
    this.getTipoComida();
    this.getPlatillos();
  }

  onChangeIngrediente( ingrediente ) {
    this.selectedIngrediente = ingrediente;

  }
  addIngrediente() {
    if ( this.selectedIngrediente !== undefined && this.selectedIngrediente !== '') {
      this.ingredientes.push(this.selectedIngrediente);
    }
  }

  removeFromIngredientes( ingrediente ) {
    const index = this.ingredientes.indexOf(ingrediente);
    this.ingredientes.splice(index, 1);
  }

  getTipoComida() {
    this.tipoComidaService.all()
      .subscribe( res => res.success ? this.tipoComidas = res.result : null );
  }
  getPlatillos() {
    this.platilloService.all()
      .subscribe( res => res.success ? this.platillosExistentes = res.result : null);
  }
  seleccionarPlatillo() {
    this.setPlatilloSeleccionado(true);
  }
  setPlatilloSeleccionado( isSelected ) {
    this.platilloSeleccionado = isSelected;
  }


}
