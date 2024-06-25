import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GestionAdministrateurService {
  constructor(private http:HttpClient,private userService:UserService) { }
 
  signin(mail:string,password:string){
    this.http.post('https://pg-dev.fr/classement_mtt_winamax/connexion.php',{
      'method':'signIn',
      'mail':mail,
      'password':password
    }).subscribe({
      next: (value:any)=>{
        console.log(value)
        this.userService.user = value['response']
      },
      error:(error)=>{console.error},
      complete:()=>console.log('complete http request signIn')
    })
  }

}
