import { RestauranteInterface } from './../../../../shared/models/restaurante.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-all',
  templateUrl: './restaurant-all.component.html',
  styleUrls: ['./restaurant-all.component.css']
})
export class RestaurantAllComponent implements OnInit {
  public titulo = 'Mis restaurantes';
  public textColor = '#444';
  public restaurantes: RestauranteInterface[] = [];
  constructor() { }

  ngOnInit() {
    this.getAllRestaurantes();
  }

  getAllRestaurantes() {
    this.restaurantes = [
      {
        id: '1',
        nombre: 'LA PARRILLA',
        razonSocial: 'RAZÓN',
        rfc: 'JDAJKN282',
        direccion: 'RAMON CORONA #928',
        descripcion: 'EL MEJOR RESTAURANTE DE COMIDA RAPIDA'
      },
      {
        id: '2',
        nombre: 'LA GOURMET',
        razonSocial: 'RAZÓN 2',
        rfc: 'GFVBHG072',
        direccion: '1RO DE MAYO #138',
        descripcion: 'EL MEJOR RESTAURANTE DE COMIDA ITALIANA'
      }
    ];
  }

}
