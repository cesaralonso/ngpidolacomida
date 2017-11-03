import { AuthLocalstorage } from './../auth-localstorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {
  public items: any[];
  constructor(
    private authLocalStorage: AuthLocalstorage
  ) {
    this.items = [
      { titulo: 'Mis restaurantes', link: '/mi-cuenta/mis-restaurantes' },
    ];
  }

  ngOnInit() {
  }
  logout() {
    this.authLocalStorage.clearAll();
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
