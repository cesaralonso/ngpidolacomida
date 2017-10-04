import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-title',
  templateUrl: './restaurant-title.component.html',
  styleUrls: ['./restaurant-title.component.css']
})
export class RestaurantTitleComponent implements OnInit {
  public title = 'LA PARRILLA';
  constructor() { }

  ngOnInit() {
  }

}
