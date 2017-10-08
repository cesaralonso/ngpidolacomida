import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagar-title',
  templateUrl: './pagar-title.component.html',
  styleUrls: ['./pagar-title.component.css']
})
export class PagarTitleComponent implements OnInit {
  public title: string;
  constructor() {
    this.title = 'MI PEDIDO';
   }

  ngOnInit() {
  }

}
