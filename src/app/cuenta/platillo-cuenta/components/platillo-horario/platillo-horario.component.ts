import { HorarioService } from './../../../../shared/services/horario.service';
import { RestaurantePlatilloHorarioService } from './../../../../shared/services/restaurante-platillo-horario.service';
import { RestaurantePlatilloHorarioInterface } from './../../../../shared/models/restaurante-platillo-horario.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantePlatilloService } from './../../../../shared/services/restaurante-platillo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillo-horario',
  templateUrl: './platillo-horario.component.html',
  styleUrls: ['./platillo-horario.component.css'],
  providers: [
    RestaurantePlatilloService,
    RestaurantePlatilloHorarioService,
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
  public horarios: RestaurantePlatilloHorarioInterface[] = [];

  constructor(
    private restaurantePlatilloService: RestaurantePlatilloService,
    private restaurantePlatilloHorarioService: RestaurantePlatilloHorarioService,
    private horarioService: HorarioService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe( parameters => {
      this.platilloId = parameters['platilloId'];
      this.restauranteId = parameters['restauranteId'];
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
    this.restaurantePlatilloHorarioService
    .removeHorario( value.res_has_pla_restaurante_idrestaurante,
                    value.res_has_pla_platillo_idplatillo,
                    value.horario_idhorario)
    .subscribe( res => {
      if ( res.success ) {
        const index = this.horarios.indexOf(value);
        this.horarios.splice(index, 1);
      }
    });
  }
  getHorarios() {
    this.restaurantePlatilloHorarioService.findByIdRestAndPlat( this.restauranteId, this.platilloId)
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
    this.horarioService.create({
      hora_ini: `${this.horarioInicial.getHours()}:${this.horarioInicial.getMinutes()}:00`,
      hora_fin: `${this.horarioFinal.getHours()}:${this.horarioFinal.getMinutes()}:00`,
      semana_idsemana: this.diaSelected
    })
    .flatMap( res => {
      if ( res.success ) {
        return this.restaurantePlatilloHorarioService.create({
          res_has_pla_restaurante_idrestaurante: this.restauranteId,
          res_has_pla_platillo_idplatillo: this.platilloId,
          horario_idhorario: res.result.insertId
        });
      }
      throw new Error();
    })
    .subscribe( res => {
      if ( res.success ) {
        this.getHorarios();
      }
    },
    error => console.log(error),
    () => console.log('Completed!'));
  }
}
