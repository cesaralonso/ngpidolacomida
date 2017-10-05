import { Carousel } from './../../models/carousel.model';
import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';


@Component({
  selector: 'app-platillo-similar',
  templateUrl: './platillo-similar.component.html',
  styleUrls: ['./platillo-similar.component.css']
})
export class PlatilloSimilarComponent implements OnInit {
  public carouselOne: Carousel;
  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 2, lg: 3, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: true,
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner',
      dynamicLength: true
    };
  }


  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
 }

}
