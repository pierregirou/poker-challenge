import { Component } from '@angular/core';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { AbstractControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-form-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  templateUrl: './form-signup.component.html',
  styleUrl: './form-signup.component.css'
})
export class FormSignupComponent {

  showPassword:boolean = false;
  signupForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    pseudoPoker: ['', Validators.required],
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    age: [''],
    phone :['',Validators.maxLength(20)],
    dateNaissance: ['', Validators.required],
    adresse: [''],
    codePostal: [''],
    ville: ['']
  },
  {
    validators: this.confirmPassword
  })
  constructor(
    private formBuilder:FormBuilder, 
    private userService:UserService
  ){}

  ngOnInit(){}

  /**
   * match password ans confirmPassword
   * @param control 
   * @returns 
   */
  confirmPassword(controls:AbstractControl):Boolean|null|object {
    return controls.get('password')?.value === controls.get('confirmPassword')?.value ? null : { mismatch:true };
  }

  signup(){
    this.userService.signup(this.signupForm)
  }

  handlerPassword():void {
    this.showPassword = !this.showPassword  
  }
}
