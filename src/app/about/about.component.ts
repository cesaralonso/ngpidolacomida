import { Title, Meta } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('Acerca de Pido la Comida');

    meta.addTags([
      { name: 'author',   content: 'softwareinsights.com.mx'},
      { name: 'keywords', content: 'pedir comida a domiciolio en ciudad guzman, servicio a domicilio de comidas en ciudad guzman, directorio de restaurantes en ciudad guzman'},
      { name: 'description', content: 'Nosotros somos una aplicación web y móvil que es un directorio de restaurantes con servicio  a domicilio en Ciudad Guzmán, Jalisco.' }
    ]);

  }

  ngOnInit() {
  }

}
