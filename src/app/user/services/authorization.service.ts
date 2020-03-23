import { Injectable } from '@angular/core';
import { User, Student } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() {
    this.login(new Student(123, 'Petrov', 'Petr'));
  }

  login(user: User | null | undefined) {
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
