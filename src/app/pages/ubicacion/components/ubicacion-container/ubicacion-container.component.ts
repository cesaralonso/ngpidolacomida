import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion-container',
  templateUrl: './ubicacion-container.component.html',
  styleUrls: ['./ubicacion-container.component.css']
})
export class UbicacionContainerComponent implements OnInit {
  public direcciones: any[] = [];
  constructor() {
    this.direcciones.push(
      {
        calle: 'Federico del Toro #339',
        colonia: 'Centro',
        CP: '49900',
        entreCalle1: 'Hidalgo',
        entreCalle2: 'Moctezuma',
      },
      {
        calle: 'Primero de Mayo #786',
        colonia: 'Centro',
        CP: '49900',
        entreCalle1: 'Hidalgo',
        entreCalle2: 'Moctezuma',
      }
  );
  }

  ngOnInit() {
  }

}
