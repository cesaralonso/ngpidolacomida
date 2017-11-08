import { ImageService } from './../../../../shared/services/image.service';
import { Configuration } from './../../../../app.constants';
import { ConfirmModalComponent } from './../../../../shared/confim-modal/confirm-modal.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { OfertaService } from './../../../../shared/services/oferta.service';
import { OfertaInterface } from './../../../../shared/models/oferta.model';
import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';

@Component({
  selector: 'app-platillo-ofertas',
  templateUrl: './platillo-ofertas.component.html',
  styleUrls: ['./platillo-ofertas.component.css'],
  providers: [
    OfertaService,
    ImageService
  ]
})
export class PlatilloOfertasComponent implements OnInit {
  @ViewChild('pbar') elProgressBar: ElementRef
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
  // For upload the file
  public uploader: FileUploader = new FileUploader({
    url: `${Configuration.HOST}/oferta/image`
  });
  // Url of image
  public imgSrc;

  constructor(
    activatedRoute: ActivatedRoute,
    private ofertaService: OfertaService,
    private imageService: ImageService,
    private dialogService: DialogService,
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
      nombre: '',
      descripcion: '',
      fecha_iniForView: new Date(),
      fecha_finForView: new Date(),
      precio: '',
      tipo: ''
    }

    this.uploader.onCompleteAll = () => this.onCompleteAll()
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
  }

  ngOnInit() {
    this.getOferta()
  }
  onCompleteAll() {
    // Espera 2 segundos para despues esconder la barra de progreso
    setTimeout( () => {
      this.elProgressBar.nativeElement.style.display = 'none'
    }, 500);
  }
  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    const data = JSON.parse(response);
    if ( data.insertId > 0 ) {

      const dataToSend = {
        image_idimage: data.insertId
      }
      // Actualiza el id de la nueva imagen a la oferta
      this.ofertaService.updateOferta( this.currentOferta.idoferta, dataToSend )
        .flatMap( resOferta =>
          resOferta.success
            ? this.imageService.findById( dataToSend.image_idimage )
            : null
        )
        .subscribe( resImage =>
          resImage.success
            ? this.imgSrc = `${Configuration.SERVER_IMAGES}/${resImage.result.src}`
            : null
        )
    }
  }
  onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    const error = JSON.parse(response);
    console.log(error)
  }
  getOferta() {
    this.ofertaService.findByIdRestAndPlat( this.restauranteId, this.platilloId )
      .subscribe( res => {
        if ( res.success && res.result ) {
          this.currentOferta = res.result
          // Asigna la ruta de la imagen
          this.imgSrc = `${Configuration.SERVER_IMAGES}/${this.currentOferta.image.src}`
        }
      })
  }

  onSubmitOferta( form ) {
    this.dialogService.addDialog(ConfirmModalComponent, {
      titulo: 'Cambiar oferta de este platillo',
      descripcion: `
      ¿Estas seguro que deseas cambiar tu oferta?
      En caso de que tengas una relacionada con este platillo, se perderá la anterior.
      `
    }).subscribe( confirm => {
        if ( confirm ) {
          // Verify if there's an oferta created for this platillo
          this.ofertaService.findByIdRestAndPlat( this.restauranteId, this.platilloId )
            .flatMap( res => {
              if ( res.success && res.result ) {
                // If  there's an oferta, it will update the oferta
                return this.ofertaService.updateOferta( res.result.idoferta, form.value)
              } else if ( res.success ) {
                // If not, it will create the oferta
                form.value.res_has_pla_restaurante_idrestaurante = this.restauranteId;
                form.value.res_has_pla_platillo_idplatillo = this.platilloId;
                return this.ofertaService.create( form.value );
              }
            })
            // Get the oferta from server
            .subscribe( res =>
              res.success
                ? this.getOferta()
                : null
            )
        }
      })
  }
  setTipo( tipo ) {
    this.oferta.tipo = tipo;
  }

  uploadPhoto() {
    this.elProgressBar.nativeElement.style.display = 'block'
    this.uploader.uploadAll()
  }

}
