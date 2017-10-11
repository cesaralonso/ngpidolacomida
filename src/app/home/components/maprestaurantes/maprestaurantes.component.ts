import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maprestaurantes',
  templateUrl: './maprestaurantes.component.html',
  styleUrls: ['./maprestaurantes.component.css']
})
export class MaprestaurantesComponent implements OnInit {

  constructor() { }

  lat: number = 51.678418;
  lng: number = 7.809007;

  ngOnInit() {
  }

}
