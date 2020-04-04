import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'agm';
  isAutenticated = false;

  authenticate() {
    this.isAutenticated = true;
  }

  logout() {
    this.isAutenticated = false;
  }
}
