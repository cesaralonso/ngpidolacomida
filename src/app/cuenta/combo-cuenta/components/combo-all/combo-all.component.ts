import { ComboService } from './../../../../shared/services/combo.service';
import { ComboInterface } from './../../../../shared/models/combo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-all',
  templateUrl: './combo-all.component.html',
  styleUrls: ['./combo-all.component.css']
})
export class ComboAllComponent implements OnInit {
  public titulo = 'Mis combos';
  public textColor = '#444';

  public combos: ComboInterface[];
  constructor( private comboService: ComboService ) {
  }

  ngOnInit() {
    // this.combos = this.comboService.getCombos();
  }

}
