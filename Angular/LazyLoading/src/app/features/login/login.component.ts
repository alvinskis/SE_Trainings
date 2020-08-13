import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  alertMessage = 'Invalid Credentials!!!';
  validUser: boolean;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  public UserLogin() {
    this.validUser = this.authService.AuthenticateUser(this.userName, this.password);
    if (this.validUser === true) {
      this.router.navigate(['technology']);
    }
    else {
      alert('Invalid Credentials');
      this.router.navigate(['login']);
    }
  }
}
