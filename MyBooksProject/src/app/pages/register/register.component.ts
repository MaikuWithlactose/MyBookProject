import { Component } from '@angular/core';
import { FormRegisterComponent } from 'src/app/component/register/form-register.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formRegisterComponent: FormRegisterComponent;

  constructor(private formBuilder: FormBuilder) {
    this.formRegisterComponent = new FormRegisterComponent(this.formBuilder);
  }

}
