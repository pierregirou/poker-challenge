import { Component } from '@angular/core';
import { FormSigninComponent } from './form-signin/form-signin.component';
import { FormSignupComponent } from './form-signup/form-signup.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    FormSigninComponent,
    FormSignupComponent,
    CustomMaterialModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


}
