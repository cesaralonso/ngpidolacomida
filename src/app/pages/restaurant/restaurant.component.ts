import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-restaurant',
    template: `<router-outlet></router-outlet>`
})

export class RestaurantComponent implements OnInit {
    constructor() {
        console.log('restaurant');
     }

    ngOnInit() { }
}
