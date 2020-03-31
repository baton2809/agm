import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { Student } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  Login() {
    const user = new Student(-1, '', '', this.email, this.password);

    this.authorizationService.login(user);
    console.log('logged in successfully');
  }
}
