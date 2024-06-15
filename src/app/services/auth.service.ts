import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean = false;
  userRole:string
  constructor() { }

  setisLoggedIn(){
    localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
  }

  getisLoggedIn():boolean{
    return this.isLoggedIn;
  }

  login(){
    this.isLoggedIn = true;
    this.userRole = 'admin';
  }

  logout(){
    this.isLoggedIn = false;
    this.userRole = '';
  }

}
