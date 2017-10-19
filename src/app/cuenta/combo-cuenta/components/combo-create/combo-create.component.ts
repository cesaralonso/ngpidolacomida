import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-create',
  templateUrl: './combo-create.component.html',
  styleUrls: ['./combo-create.component.css']
})
export class ComboCreateComponent implements OnInit {
  public tituloHeader = 'Crear un nuevo combo';
  public textColor = '#444';
  public selectedPlatillo: any;
  public platillos = [];
  // Form validation
  public formGroup: FormGroup;
  public titulo: AbstractControl;
  public descripcion: AbstractControl;
  public precio: AbstractControl;
  public platillo: AbstractControl;

  constructor( formBuilder: FormBuilder ) {
    this.formGroup = formBuilder.group({
      'titulo': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'descripcion': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'precio': ['', Validators.compose([Validators.required])]
    });
    this.titulo = this.formGroup.controls['titulo'];
    this.descripcion = this.formGroup.controls['descripcion'];
    this.precio = this.formGroup.controls['precio'];
  }

  ngOnInit() {
  }

  onChangePlatillo( platillo ) {
    this.selectedPlatillo = platillo;
  }

  addPlatillo() {
    if ( this.selectedPlatillo !== undefined && this.selectedPlatillo !== '') {
      this.platillos.push(this.selectedPlatillo);
    }
  }

  removeFromPlatillos( platillo ) {
    const index = this.platillos.indexOf(platillo);
    this.platillos.splice(index, 1);
  }

  onSubmitCombo( values: any ) {
    if ( this.formGroup.valid ) {
      console.log(values);
    }
  }

}
