import { Component, OnInit } from '@angular/core';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { FormControl,FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  constructor(){
    this.email = '';
    this.password = '';
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.signInUser = { 'email': this.email, 'password': this.password}
    
  }

  signin(signinForm:NgForm){
    console.log(signinForm.form.value.email)
    console.log(signinForm.form.value.password)
  }
}
