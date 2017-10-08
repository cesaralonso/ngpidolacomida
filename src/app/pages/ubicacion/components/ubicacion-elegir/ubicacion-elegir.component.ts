import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ubicacion-elegir',
  templateUrl: './ubicacion-elegir.component.html',
  styleUrls: ['./ubicacion-elegir.component.css']
})
export class UbicacionElegirComponent implements OnInit {
  @Input() direcciones: any[];

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  public formDireccion = {
    calle: '',
    colonia: '',
    CP: '',
    entreCalle1: '',
    entreCalle2: ''
  };
  constructor() {

  }

  ngOnInit() {
  }

  direccionSelected( direccion: any ) {
    this.formDireccion = {
      calle: direccion.calle,
      colonia: direccion.colonia,
      CP: direccion.CP,
      entreCalle1: direccion.entreCalle1,
      entreCalle2: direccion.entreCalle2
    };
  }
}
