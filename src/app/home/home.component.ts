
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('Pido la Comida');

    meta.addTags([
      { name: 'author',   content: 'softwareinsights.com.mx'},
      { name: 'keywords', content: 'pedir comida a domiciolio en ciudad guzman, servicio a domicilio de comidas en ciudad guzman, directorio de restaurantes en ciudad guzman'},
      { name: 'description', content: 'Directorio de restaurantes con servicio  a domicilio en Ciudad Guzmán, Jalisco.' }
    ]);

  }

  ngOnInit() {
  }



}
