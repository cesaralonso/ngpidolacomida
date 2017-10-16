import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ComboInterface } from './../../../../shared/models/combo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-edit',
  templateUrl: './combo-edit.component.html',
  styleUrls: ['./combo-edit.component.css']
})
export class ComboEditComponent implements OnInit {
  public tituloHeader = 'Editar mi combo';
  public textColor = '#444';

  public combo: ComboInterface;
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
    this.getCombo();
  }

  getCombo() {
    this.combo = {
      titulo: 'Pide uno y llevate 3!',
      descripcion: 'Pide una enchilada y llevate dos más de regalo',
      precio: 30.00,
      id: 1
    };
  }

  onSubmitCombo( values: any ) {
    if ( this.formGroup.valid ) {
      console.log(values);
    }
  }

}
