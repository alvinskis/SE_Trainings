import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public AuthenticateUser(userName: string, password: string): boolean {
    if (userName === 'admin' && password === 'Admin123') {
      localStorage.setItem('currentUser', 'loggedIn');
      return true;
    }
    else {
      return false;
    }

  }
}
