import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private router: Router) {
  }

  login(mail: string, password: string) {
    const user = {
      id : 1234,
      firstName : 'Ivan',
      lastName : 'Ivanoff'
    } as User;
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['courses']);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  isAuthenticated() {
    console.log('~> {}', localStorage.getItem('user') != null);
    return localStorage.getItem('user') != null;
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
