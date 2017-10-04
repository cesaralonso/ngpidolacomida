import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillo-info',
  templateUrl: './platillo-info.component.html',
  styleUrls: ['./platillo-info.component.css']
})
export class PlatilloInfoComponent implements OnInit {
  public max = 10;
  public rate = 7;
  public isReadonly = true;

  public overStar: number;
  public percent: number;

  constructor() { }

  ngOnInit() {
  }

  public hoveringOver( value: number ): void {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  }

  public resetStar(): void {
    this.overStar = void 0;
  }

}
