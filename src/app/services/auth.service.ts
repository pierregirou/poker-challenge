import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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
    if(localStorage.getItem('isLoggedIn') == null){
      this.isLoggedIn = false
    }else{
      this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn') as string);
    }
    this.emit_user_loggedIn();
  }

  login(){
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
    this.getisLoggedIn()
    this.router.navigateByUrl('dashboard');
  }

  logout(){
    this.isLoggedIn = false;
    this.emit_user_loggedIn();
    this.userService.logout();
    localStorage.clear();
  }

  emit_user_loggedIn(){
    this._sendIFUserIsLoggedIn.next(this.isLoggedIn);
  }

}
