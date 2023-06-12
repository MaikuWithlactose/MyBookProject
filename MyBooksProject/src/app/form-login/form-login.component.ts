import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})

export class FormLoginComponent {
  email: string = "";
  password: string = "";
  loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
