import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { EmailValidator } from '../../theme/validators';


@Component({
  selector: 'forgot',
  templateUrl: './forgot.html',
  styleUrls: ['./forgot.scss']
})
export class Forgot {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])]
    });

    this.email = this.form.controls['email'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // console.log(values);
    }
  }
}
