import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillo-ingrediente',
  templateUrl: './platillo-ingrediente.component.html',
  styleUrls: ['./platillo-ingrediente.component.css']
})
export class PlatilloIngredienteComponent implements OnInit {
  public titulo = 'Agrega ingredientes a tu platillo';
  public textColor = '#444';
  constructor() { }

  ngOnInit() {
  }

}
