import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {
  public restaurantTitle = 'LA PARRILLA';
  constructor() { }

  ngOnInit() {

  }
}
