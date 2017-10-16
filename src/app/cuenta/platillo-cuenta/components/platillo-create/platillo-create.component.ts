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
  constructor(

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

}
