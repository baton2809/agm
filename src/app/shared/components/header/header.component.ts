import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/user/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthorizationService) { }

  ngOnInit(): void {
  }

  logout() {
    console.log('logout');
    this.authService.logout();
  }

}
