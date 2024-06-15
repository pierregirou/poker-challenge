import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

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
  constructor(private router:Router){
    
  }
  ngOnInit(){
    setInterval(()=>{
      this.getDateForShow();
    },100)

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
  
  redirectTo(){
    this.router.navigateByUrl('admin')
  }
}
