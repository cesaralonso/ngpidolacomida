import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {
  public restaurantTitle = 'LA PARRILLA';

  public horario: any;

  constructor() {
    this.horario = {
      lunesInicia: '9:00',
      lunesTermina: '14:00',
      martesInicia: '9:00',
      martesTermina: '14:00',
      miercolesInicia: '9:00',
      miercolesTermina: '14:00',
      juevesInicia: '9:00',
      juevesTermina: '14:00',
      viernesInicia: '9:00',
      viernesTermina: '14:00',
      sabadoInicia: '9:00',
      sabadoTermina: '14:00',
      domingoInicia: '9:00',
      domingoTermina: '14:00'
    };
   }

  ngOnInit() {
  }
}
