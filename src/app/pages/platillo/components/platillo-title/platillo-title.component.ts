import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillo-title',
  templateUrl: './platillo-title.component.html',
  styleUrls: ['./platillo-title.component.css']
})
export class PlatilloTitleComponent implements OnInit {
  public title = 'POZOLE';
  constructor() { }

  ngOnInit() {
  }

}
