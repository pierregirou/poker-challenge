import { Component, OnInit } from '@angular/core';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GestionAdministrateurService } from '../../services/gestion-administrateur.service';

@Component({
  selector: 'app-form-signin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
  ],
  providers:[
    GestionAdministrateurService
  ],
  templateUrl: './form-signin.component.html',
  styleUrl: './form-signin.component.css'
})
export class FormSigninComponent implements OnInit {
  email:string;
  password:string;
  signInUser: { email: string; password: string; };
  constructor(private service_admin:GestionAdministrateurService){
    this.email = 'pierre.girou42290@gmail.com';
    this.password = 'pierregirou';
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.signInUser = { 'email': this.email, 'password': this.password}
    
  }

  signin(signinForm:NgForm){
    console.log(signinForm.form.value.email)
    console.log(signinForm.form.value.password)
    this.service_admin.signin(signinForm.form.value.email,signinForm.form.value.password)

  }
}
