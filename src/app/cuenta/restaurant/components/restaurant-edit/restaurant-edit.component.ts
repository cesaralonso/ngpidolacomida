import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {
  public titulo = 'Editar datos de restaurante';
  public textColor = '#3D3D3D';
  constructor() { }

  ngOnInit() {
  }

}
