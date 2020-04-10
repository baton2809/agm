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
    this.authorizationService.login(this.email, this.password);
    this.loginEmitter.emit();
    console.log('logged in successfully');
  }
}
