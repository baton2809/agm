import { Injectable } from '@angular/core';
import { User, Student } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() {
  }

  login(user: User | null | undefined) {
    if (user != null) {
      user.id = 1234;
      user.lastName = 'Ivanoff';
      user.firstName = 'Ivan';
    }
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('user');
  }

  isAuthenticated() {
    return localStorage.getItem('user') != null;
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
