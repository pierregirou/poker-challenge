import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  link:string;
  constructor(private http:HttpClient) { 
    this.link = 'https://www.pg-dev.fr/pokerChallenge/challenge.php';}

  getAllChallengePulic():Observable<any>{
    return this.http.post(this.link,{
      "type":"all",
      "public":1
    })
  }

  getChallengeByLogin(id_user:number):Observable<any>{
    return this.http.post(this.link,{
      "type":"getByIdUser",
      "user_id":id_user
    })
  }

  getChallengeById(id:number):Observable<any>{
    return this.http.post(this.link,{
      "type":"getChallengeById",
      "challenge_id":id
    })
  }

  setChallenge(login:string):Observable<any>{
    return this.http.post(this.link,{
      "type":"set",
      "user_login":login
    })
  }
}
