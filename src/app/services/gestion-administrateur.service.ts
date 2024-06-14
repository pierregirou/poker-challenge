import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionAdministrateurService {
  link:string;
  constructor(private http:HttpClient) {
    this.link = 'https://www.pg-dev.fr/winamax/connexion.php';
   }

  signin(login:string,password:string){
    this.http.post(this.link,{
      'method':'signin',
      'login': login,
      'password' : password
    }).subscribe({
      next:(value)=>(console.log(value)),
      error:(e)=>(console.error(e)),
      complete:()=>(console.log('request signin complete'))
    })  
  }
}
