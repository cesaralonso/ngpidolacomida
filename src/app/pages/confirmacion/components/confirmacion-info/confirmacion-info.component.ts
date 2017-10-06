import { PlatilloInterface } from './../../../../shared/models/platillo.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirmacion-info',
  templateUrl: './confirmacion-info.component.html',
  styleUrls: ['./confirmacion-info.component.css']
})
export class ConfirmacionInfoComponent implements OnInit {
  @Input() platillos: PlatilloInterface[];
  constructor() { }

  ngOnInit() {
  }

}
