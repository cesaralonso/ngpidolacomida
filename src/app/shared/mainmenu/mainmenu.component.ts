import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
  public items: string[];
  constructor() {
    this.items = ['Mis platillos', 'Mis combos', 'Mis restaurantes'];
  }

  ngOnInit() {
  }
  public onHidden(): void {
    console.log('Dropdown is hidden');
  }
  public onShown(): void {
    console.log('Dropdown is shown');
  }
  public isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
  public mouseEnter() {
    console.log('Enter');
  }

}
