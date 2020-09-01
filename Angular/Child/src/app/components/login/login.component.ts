import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  public loginName: string;
  @ViewChild('userNameRef') userName: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.userName.nativeElement.focus();

    console.log(this.userName);
  }

  ngOnInit(): void {
  }
}
