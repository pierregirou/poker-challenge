import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean = false;
  userRole:string
  _sendIFUserIsLoggedIn = new BehaviorSubject(false);

  constructor(
    private router:Router,
    private userService:UserService
  ) {
    this.getisLoggedIn()
   }

  setisLoggedIn(){
    localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
  }

  getisLoggedIn(){
    // aller chercher en bdd si connected ou non 
    this._sendIFUserIsLoggedIn.next(this.isLoggedIn);
  }

  login(){
    this.isLoggedIn = true;
    this.userRole = 'admin';
    this.router.navigateByUrl('dashboard');
    this.getisLoggedIn()
    localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
    localStorage.setItem('asdm', JSON.stringify(this.userRole));
  }

  logout(){
    this.isLoggedIn = false;
    this.userRole = '';
    this.userService.logout();
    localStorage.clear();
  }

}
