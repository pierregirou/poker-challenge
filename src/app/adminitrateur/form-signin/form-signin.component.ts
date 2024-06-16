import { Component, OnInit } from '@angular/core';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GestionAdministrateurService } from '../../services/gestion-administrateur.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  showPassWord:boolean  = false;

  constructor(
    private gestionAdminService:GestionAdministrateurService,
    private snackBar:MatSnackBar
    ){
    this.email = 'pierre.girou42290@gmail.com';
    this.password = 'pierregirou';
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.signInUser = { 'email': this.email, 'password': this.password}
  }


  /**
   * get connection
   * @param signinForm 
   */
  signin(signinForm:NgForm){
    this.gestionAdminService.signin(signinForm).subscribe({
      next:(value:any)=>{
        if(value.succes){
          this.snackBar.open(`Bonjour ${value.response.login}`,'OK',{duration:5000})
        }else{
          this.snackBar.open(`Identifiant incorrect !`,'RETRY',{duration:5000})
        }
      },
      error:(e)=>(console.error(e)),
      complete:()=>(console.log('request signin complete'))
    })  
  }

  /**
   * show or hidden passWord
   */
  handlerPassword() {
    this.showPassWord = !this.showPassWord;
  }
}