import { Component, OnInit } from '@angular/core';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { FormControl,FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GestionAdministrateurService } from '../../services/gestion-administrateur.service';

@Component({
  selector: 'app-form-signin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  templateUrl: './form-signin.component.html',
  styleUrl: './form-signin.component.css'
})
export class FormSigninComponent implements OnInit {

  email:string;
  password:string;
  signInUser: { email: string; password: string; };
  showPassWord: boolean;
  constructor(private gestionAdminService:GestionAdministrateurService){
    this.email = '';
    this.password = '';
    this.showPassWord = false
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.signInUser = { 'email': this.email, 'password': this.password}
  }
<<<<<<< HEAD
  onSubmit(signinForm:NgForm) {
    console.log('submited', signinForm.value);
    this.signInUser.email = '';
    this.signInUser.password = '';
    
  }
=======

  /**
   * get connection
   * @param signinForm 
   */
>>>>>>> 8012f4d7f4f933d2393db040f5b61c1357b1a943
  signin(signinForm:NgForm){
    console.log(signinForm.value.email)
    console.log(signinForm.form.value.password)
    this.gestionAdminService.signin(signinForm.value.email,signinForm.value.password)
  }

  /**
   * show or hidden passWord
   */
  handlerPassword() {
    this.showPassWord = !this.showPassWord;
  }

}
