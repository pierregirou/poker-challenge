import { Component, OnInit } from '@angular/core';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
    UserService
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
    private userService:UserService,
    private authService:AuthService,
    private snackBar:MatSnackBar,
    private router:Router
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
    this.userService.signin(signinForm).subscribe({
      next:(value:any)=>{
        if(value.success){
          this.snackBar.open(`Bonjour ${value.response.login}`,'OK',{duration:5000})
          localStorage.setItem('User', JSON.stringify(value.response))
          this.connectedUser(value.success)
        }else{
          this.snackBar.open(`Identifiant incorrect !`,'RETRY',{duration:5000})
        }
      },
      error:(e:Error)=>{
        this.snackBar.open('Une erreur et survenue !','X')
        console.error(e)
      },
      complete:()=>(console.log('request signin complete'))
    })  
  }
  connectedUser(value:boolean) {
    console.log(value);
    this.authService.login()
  }

  /**
   * show or hidden passWord
   */
  handlerPassword() {
    this.showPassWord = !this.showPassWord;
  }

  goToPasswordForgot(){
    this.router.navigateByUrl('passwordforgot');
  }
}