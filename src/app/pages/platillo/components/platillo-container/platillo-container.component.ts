import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillo-container',
  templateUrl: './platillo-container.component.html',
  styleUrls: ['./platillo-container.component.css']
})
export class PlatilloContainerComponent implements OnInit {
  public title = 'POZOLE';
  constructor() { }

  ngOnInit() {
  }

}
