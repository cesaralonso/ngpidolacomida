import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillo-horario',
  templateUrl: './platillo-horario.component.html',
  styleUrls: ['./platillo-horario.component.css']
})
export class PlatilloHorarioComponent implements OnInit {
  public titulo = 'Horarios de preparación';
  public textColor = '#444';
  public isMeridian = false;
  public horarioInicial: Date = new Date(); // Hora de abrir
  public horarioFinal: Date = new Date(); // Hora de cerrar
  constructor() {
    this.horarioInicial.setHours(0);
    this.horarioInicial.setMinutes(0);
    this.horarioFinal.setHours(0);
    this.horarioFinal.setMinutes(0);
  }

  ngOnInit() {
  }

}
