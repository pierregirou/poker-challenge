import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  link:string;
  constructor(private http:HttpClient) {
    this.link = 'https://www.pg-dev.fr/winamax/connexion.php';
   }

  signin(signinForm:NgForm):Observable<any>{
   return this.http.post(this.link,{
      'method':'signin',
      'login': signinForm.value.email,
      'password' : signinForm.value.password
    })
  }

  signup(signupForm:FormGroup){
    console.log(signupForm.value)
    this.http.post(this.link,{
      'method' :'signup',
      'login': signupForm.value.email,
      'mail': signupForm.value.email,
      'password' : signupForm.value.password,
      'pseudoPoker' : signupForm.value.pseudoPoker,
      'nom' : signupForm.value.nom,
      'prenom' : signupForm.value.prenom,
      'age' : signupForm.value.age,
      'phone' : signupForm.value.phone,
      'date_naissance' : signupForm.value.dateNaissance,
      'adresse' : signupForm.value.adresse,
      'code_postal' : signupForm.value.codePostal,
      'ville' : signupForm.value.ville,
    }).subscribe({
      next: ((value)=>{console.log(value)}),
      error: ((e)=>{console.error(e)}),
      complete: (()=>{console.log('request signin complete')}),
    })
  }
}
