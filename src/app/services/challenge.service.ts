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
    return this.http.get(`${this.link}?type=all&public=1`)
  }
}
