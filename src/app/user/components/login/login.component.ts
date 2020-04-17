import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @Output() loginEmitter = new EventEmitter();

  public email = '';
  public password = '';

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  Login() {

    const request = {
      "login": this.email,
      "password": this.password
    };

    // TODO add API call

    this.authorizationService.login(this.email, this.password);
    this.loginEmitter.emit();
    console.log('logged in successfully');
  }
}
