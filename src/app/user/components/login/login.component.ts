import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @Output() loginEmitter = new EventEmitter();

  public email = '';
  public password = '';

  constructor(
    private authorizationService: AuthorizationService,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  Login() {

    const request = {
      login: this.email,
      password: this.password
    };

    this.httpClient.post('http://localhost:3004/auth/login', request)
    .subscribe(
      (token) => {
        this.authorizationService.login(token);
        this.httpClient.post('http://localhost:3004/auth/userinfo', token)
          .subscribe((user) => {
            if (this.authorizationService.isAuthenticated) {
              this.router.navigate(['courses']);
            }
          }, err => {
            console.log(err);
            alert(err['error']);
          });
      }, err => {
        console.log(err);
        alert(err['error']);
      });

    // this.authorizationService.login(this.email, this.password);
    this.loginEmitter.emit();
    console.log('logged in successfully');
  }
}
