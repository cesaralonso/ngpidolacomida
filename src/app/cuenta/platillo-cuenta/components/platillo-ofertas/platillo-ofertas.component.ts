import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platillo-ofertas',
  templateUrl: './platillo-ofertas.component.html',
  styleUrls: ['./platillo-ofertas.component.css']
})
export class PlatilloOfertasComponent implements OnInit {
  public titulo = 'Agrega una oferta para tu platillo';
  public textColor = '#444';
  // Restaurante id
  public restauranteId: string;
  // Platillo id
  public platilloId: string;
  constructor(
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe( parameters => {
        this.restauranteId = parameters['restauranteId'];
        this.platilloId = parameters['platilloId'];
      });
  }

  ngOnInit() {
  }

}
