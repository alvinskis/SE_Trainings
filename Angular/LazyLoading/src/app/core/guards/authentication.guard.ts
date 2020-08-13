import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canLoad(): boolean {
    if (localStorage.getItem('currentUser') !== null) {
      return true;
    }
    else {
      alert('Not allowed to access this page!!!');
      this.router.navigate(['login']);
    }
  }
}
