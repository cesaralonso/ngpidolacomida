import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagar-container',
  templateUrl: './pagar-container.component.html',
  styleUrls: ['./pagar-container.component.css']
})
export class PagarContainerComponent implements OnInit {
  public titulo = 'Mi Pedido';
  public background = 'url(http://www.homedine.co.in/images/banner4.jpg)';
  constructor() { }

  ngOnInit() {
  }

}
