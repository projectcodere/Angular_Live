import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signInStatus : boolean;

  constructor() { }

  isUserLoggedIn(){
    return this.signInStatus;
  }
}
