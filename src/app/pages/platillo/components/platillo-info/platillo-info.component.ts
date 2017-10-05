import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillo-info',
  templateUrl: './platillo-info.component.html',
  styleUrls: ['./platillo-info.component.css']
})
export class PlatilloInfoComponent implements OnInit {
  public max = 5;
  public rate = 3;
  public isReadonly = true;

  public overStar: number;
  public percent: number;

  constructor() { }

  ngOnInit() {
  }

}
