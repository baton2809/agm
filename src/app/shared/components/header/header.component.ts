import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from 'src/app/user/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Output() logoutEmitter = new EventEmitter();

  constructor(public authService: AuthorizationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.logoutEmitter.emit();
    this.authService.logout();
    console.log('logout');
  }
}
