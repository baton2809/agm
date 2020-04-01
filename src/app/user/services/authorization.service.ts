import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() {
  }

  login(mail: string, password: string) {
    const user = {
      id : 1234,
      firstName : 'Ivan',
      lastName : 'Ivanoff'
    } as User;
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
