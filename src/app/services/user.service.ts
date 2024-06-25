import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  link:string;
  user:any;
  constructor(private http:HttpClient) {
    this.link = 'https://www.pg-dev.fr/pokerChallenge/connexion.php';
   }

  signin(signinForm:NgForm):Observable<any>{
   return this.http.post(this.link,{
      'method':'signin',
      'login': signinForm.value.email,
      'password' : signinForm.value.password
    })
  }

  signup(signupForm:FormGroup): Observable<any>{
   return this.http.post(this.link,{
      'method' :'signup',
      'pseudoPoker': signupForm.value.pseudoPoker,
      'mail': signupForm.value.email,
      'password' : signupForm.value.password,
      'nom' : signupForm.value.nom,
      'prenom' : signupForm.value.prenom,
      'age' : signupForm.value.age,
      'phone' : signupForm.value.phone,
      'date_naissance' : signupForm.value.dateNaissance,
      'adresse' : signupForm.value.adresse,
      'code_postal' : signupForm.value.codePostal,
      'ville' : signupForm.value.ville
    })
  }

  logout(){
    this.user = localStorage.getItem('User');
    console.log('deco : '+ this.user)
    this.http.post(this.link,{
       'method':'logout',
       'user_id': JSON.parse(this.user).id_user,
       'connected' : false
     }).subscribe();
   }
}
