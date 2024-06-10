import { Component } from '@angular/core';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { FormControl,FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-signin',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  templateUrl: './form-signin.component.html',
  styleUrl: './form-signin.component.css'
})
export class FormSigninComponent {

  signin(signinForm:NgForm){
    console.log(signinForm.form.value.email)
    console.log(signinForm.form.value.password)
  }
}
