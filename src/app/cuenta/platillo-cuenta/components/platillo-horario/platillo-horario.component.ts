import { HorarioService } from './../../../../shared/services/horario.service';
import { PlatilloHorarioService } from './../../../../shared/services/platillo-horario.service';
import { PlatilloHorarioInterface } from './../../../../shared/models/platillo-horario.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantePlatilloService } from './../../../../shared/services/restaurante-platillo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillo-horario',
  templateUrl: './platillo-horario.component.html',
  styleUrls: ['./platillo-horario.component.css'],
  providers: [
    RestaurantePlatilloService,
    PlatilloHorarioService,
    HorarioService
  ]
})
export class PlatilloHorarioComponent implements OnInit {
  public titulo = 'Horarios de preparación';
  public textColor = '#444';
  public isMeridian = false;
  public horarioInicial: Date = new Date(); // Hora de abrir
  public horarioFinal: Date = new Date(); // Hora de cerrar
  // Arreglo de dias de la semana
  public semana = [];
  // Día seleccionado
  public diaSelected: any;
  // ID del restaurante
  public restauranteId: string;
  // ID del platillo
  public platilloId: string;
  // Contiene todos los horarios del platillo
  public horarios: PlatilloHorarioInterface[] = [];

  constructor(
    private restaurantePlatilloService: RestaurantePlatilloService,
    private platilloHorarioService: PlatilloHorarioService,
    private horarioService: HorarioService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe( parameters => {
      this.platilloId = parameters['platilloId'];
    });

    this.horarioInicial.setHours(0);
    this.horarioInicial.setMinutes(0);
    this.horarioFinal.setHours(0);
    this.horarioFinal.setMinutes(0);
    this.semana = [
      { value: 'LUNES', option: 'Lunes'},
      { value: 'MARTES', option: 'Martes'},
      { value: 'MIÉRCOLES', option: 'Miércoles'},
      { value: 'JUEVES', option: 'Jueves'},
      { value: 'VIERNES', option: 'Vierenes'},
      { value: 'SÁBADO', option: 'Sábado'},
      { value: 'DOMINGO', option: 'Domingo'}
    ];
  }

  ngOnInit() {
    this.getHorarios();
  }
  removeHorario( value ) {
    console.log(value);
    this.platilloHorarioService
    .removeHorario( value.platillo_idplatillo,
                    value.hora_fin,
                    value.hora_fin,
                    value.semana_idsemana)
    .subscribe( res => {
      if ( res.success && res.result.affectedRows > 0 ) {
        const index = this.horarios.indexOf(value);
        this.horarios.splice(index, 1);
      }
    });
  }
  getHorarios() {
    this.platilloHorarioService.getByParam( 'platillo_idplatillo', this.platilloId)
      .subscribe( res => {
        if ( res.success ) {
          this.horarios = res.result;
        }
      });
  }
  setDiaSelectet( dia ) {
    this.diaSelected = dia;
  }
  addHorario() {
    this.platilloHorarioService.create({
      platillo_idplatillo: this.platilloId,
      hora_ini: `${this.horarioInicial.getHours()}:${this.horarioInicial.getMinutes()}:00`,
      hora_fin: `${this.horarioFinal.getHours()}:${this.horarioFinal.getMinutes()}:00`,
      semana_idsemana: this.diaSelected
    }).subscribe( res => {
      if ( res.success ) {
        this.getHorarios();
      }
    });
  }
}
