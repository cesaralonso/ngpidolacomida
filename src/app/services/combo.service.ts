import { ComboInterface } from './../shared/models/combo.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ComboService {
  public dataExample: ComboInterface[] = [
    {
      titulo: 'Combo 1',
      descripcion: 'Llevate unas papas y refresco a mitad de precio',
      precio: 85.50,
      id: 0,
    },
    {
      titulo: 'Combo 2',
      descripcion: 'Combo de palomitas y nachos',
      precio: 100.00,
      id: 1,
    }
  ];
  constructor() { }

  public getCombos() {
    return this.dataExample;
  }

  public getComboById( id: any ) {
    return this.dataExample[id];
  }


}
