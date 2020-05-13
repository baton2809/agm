import { Action, createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/login.actions';
import { CourseState } from '..';


export const loginFeatureKey = 'login';

export interface AuthState {
  token: string;
}

export const initialState: AuthState = {
  token: localStorage.getItem('token') || '',
};


const reducer = createReducer(
  initialState,
  on(Actions.login, (state, props) => {
    console.log('login action being handled');

    localStorage.setItem('fakeToken', JSON.stringify(state));

    return { ...state };
  }),
  on(Actions.logout, (state, props) => {
    console.log('login action being handled');

    localStorage.removeItem('fakeToken');

    return { ...state };
  }),
);




export function loginReducer(state: AuthState | undefined, action) {
  return reducer(state, action);
}
