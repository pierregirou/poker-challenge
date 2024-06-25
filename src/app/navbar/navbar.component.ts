import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    CustomMaterialModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  date: Date;
  heure: number|string;
  minute: number|string;
  seconde: number|string;
  affichageHeure: string;
  isLoggedIn:boolean;
  sub:Subscription
  constructor(
    private router:Router,
    private authService:AuthService
  ){
    
  }
  ngOnInit(){
    setInterval(()=>{
      this.getDateForShow();
    },100)

    this.sub = this.authService._sendIFUserIsLoggedIn.subscribe(
      (value)=>{
        console.log(value)
      this.isLoggedIn = value
    })

  }

  
  getDateForShow() {
    this.date = new Date();
    this.heure = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.seconde = this.date.getSeconds();

    if(this.heure < 10){
      this.heure = '0'+this.heure
    }
    if(this.minute < 10){
      this.minute = '0'+this.minute
    }
    if(this.seconde < 10){
      this.seconde = '0'+this.seconde
    }

    this.affichageHeure = `${this.heure}:${this.minute}:${this.seconde}`
    return this.affichageHeure
  }
  
  connexion(isLoggedIn:any){
    if(isLoggedIn){
      console.log('user is ' + isLoggedIn)
      this.authService.logout()
    }
    this.router.navigateByUrl('admin')
  }
}
