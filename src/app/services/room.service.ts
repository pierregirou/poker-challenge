import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  link: string;

  
  constructor(private http:HttpClient) { 
    this.link = 'https://www.pg-dev.fr/pokerChallenge/pokerRoom.php';
}

  getPokerRomm():Observable<any>{
    return this.http.get(this.link);
  }

  incrementClick(id:number){
    console.log(id);
    
    this.http.post(this.link,{
      "method": "increment",
      "id_room": id
    }).subscribe();
  }
}
