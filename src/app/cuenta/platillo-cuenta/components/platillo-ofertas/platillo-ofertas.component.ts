import { ConfirmModalComponent } from './../../../../shared/confim-modal/confirm-modal.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { OfertaService } from './../../../../shared/services/oferta.service';
import { OfertaInterface } from './../../../../shared/models/oferta.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-platillo-ofertas',
  templateUrl: './platillo-ofertas.component.html',
  styleUrls: ['./platillo-ofertas.component.css'],
  providers: [
    OfertaService
  ]
})
export class PlatilloOfertasComponent implements OnInit {
  @ViewChild('fileInput') fileInput;

  public titulo = 'Agrega una oferta para tu platillo';
  public textColor = '#444';
  // Restaurante id
  public restauranteId: string;
  // Platillo id
  public platilloId: string;
  // New oferta
  public oferta: OfertaInterface;
  // Oferta actual
  public currentOferta: OfertaInterface;
  constructor(
    activatedRoute: ActivatedRoute,
    private ofertaService: OfertaService,
    private dialogService: DialogService
  ) {
    activatedRoute.params.subscribe( parameters => {
        this.restauranteId = parameters['restauranteId'];
        this.platilloId = parameters['platilloId'];
      });
    // Inicializa algunos datos para NgModel binding
    this.oferta = {
      nombre: '',
      descripcion: '',
      fecha_iniForView: new Date(),
      fecha_finForView: new Date(),
      precio: '',
      tipo: ''
    }
    this.currentOferta = {
      nombre: 'lel',
      descripcion: '',
      fecha_iniForView: new Date(),
      fecha_finForView: new Date(),
      precio: '',
      tipo: ''
    }
  }

  ngOnInit() {
    this.getOferta()
  }
  getOferta() {
    this.ofertaService.findByIdRestAndPlat( this.restauranteId, this.platilloId )
      .subscribe( res => res.success ? this.currentOferta = res.result : 0 )
  }

  onSubmitOferta( form ) {
    this.dialogService.addDialog(ConfirmModalComponent, {
      titulo: 'Cambiar oferta de este platillo',
      descripcion: `
      ¿Estas seguro que deseas cambiar tu oferta?
      En caso de que tengas una relacionada con este platillo, se perderá la anterior.
      `
    }).subscribe( confirm => {
        let isRemove = false;
        if ( confirm ) {
          // Verify if there's an oferta created for this platillo
          form.value.res_has_pla_restaurante_idrestaurante = this.restauranteId
          form.value.res_has_pla_platillo_idplatillo = this.platilloId
          this.ofertaService.findByIdRestAndPlat( this.restauranteId, this.platilloId )
            .flatMap( res => {
              if ( res.success && res.result ) {
                isRemove = true;
                return this.ofertaService.removeByRestAndPlatId( this.restauranteId, this.platilloId )
              } else if ( res.success ) {
                console.log('else if')
                return this.ofertaService.create( form.value );
              }
            })
            .subscribe( res => {
              if ( res.success ) {
                // Ha eliminado la oferta anterior y crea la nuea oferta
                if ( isRemove ) {
                  return this.ofertaService.create( form.value )
                    .subscribe( res2 => res2.success ? this.getOferta() : 0);
                } else { // Crea una oferta por primera vez para este platillo
                  this.getOferta();
                }
              }
            })

        }
      })
  }
  setTipo( tipo ) {
    this.oferta.tipo = tipo;
  }


  upload() {
    const fileBrowser = this.fileInput.nativeElement;
    if ( fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append('image', fileBrowser.files[0])
      this.ofertaService.sendImage( formData )
        .subscribe( res => console.log(res));
    }
  }

}
