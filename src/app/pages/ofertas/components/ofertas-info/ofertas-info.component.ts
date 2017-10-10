import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ofertas-info',
  templateUrl: './ofertas-info.component.html',
  styleUrls: ['./ofertas-info.component.css']
})
export class OfertasInfoComponent implements OnInit {
  public link = '#';
  public imgLink = 'assets/img/galeria02.jpg';
  public descripcion = 'Descripcion de prueba';
  public number = '123234';
  constructor() { }

  ngOnInit() {
  }

}
