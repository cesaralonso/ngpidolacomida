import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-create',
  templateUrl: './combo-create.component.html',
  styleUrls: ['./combo-create.component.css']
})
export class ComboCreateComponent implements OnInit {
  public titulo = 'Crear un nuevo combo';
  public textColor = '#444'
  constructor() { }

  ngOnInit() {
  }

}
