import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionAdministrateurService {
  constructor(private http:HttpClient) { }
 
  signin(mail:string,password:string){
    this.http.post('https://pg-dev.fr/winamax/connexion.php',{
      'method':'signin',
      'mail':mail,
      'password':password
    }).subscribe({
      next: ((value)=>{console.log(value)}),
      error: ((error)=>console.error),
      complete:(()=>console.log('complete http request signIn'))
    })
  }

}
