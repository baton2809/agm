import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CourseState } from 'src/app/store';
import { Observable } from 'rxjs';
import * as Actions from '../../store/actions/login.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  login$: Observable<object>;

  constructor(private router: Router, private store: Store<CourseState>) {
    console.log('we have a store ', this.store);
  }

  // login(mail: string, password: string) {
  //   const user = {
  //     id : 1234,
  //     firstName : 'Ivan',
  //     lastName : 'Ivanoff'
  //   } as User;
  //   localStorage.setItem('user', JSON.stringify(user));
  //   this.router.navigate(['courses']);
  // }

  login(token: object) {
    this.store.dispatch(Actions.login({ token }));
  }

  logout() {
    this.store.dispatch(Actions.logout());
    this.router.navigate(['login']);
  }

  isAuthenticated() {
    console.log('~> user is authenticated - ', localStorage.getItem('fakeToken') != null);
    return localStorage.getItem('fakeToken') != null;
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('fakeToken'));
  }
}
