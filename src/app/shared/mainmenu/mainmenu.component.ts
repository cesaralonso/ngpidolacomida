import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
  public items: any[];
  constructor() {
    this.items = [
      { titulo: 'Mis platillos', link: '/mi-cuenta/mis-platillos' },
      { titulo: 'Mis combos', link: '/mi-cuenta/mis-combos' },
      { titulo: 'Mis restaurantes', link: '/mi-cuenta/mis-restaurantes' }
    ];
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
