import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { loginReducer, AuthState } from './reducers/login.reducer';


export interface CourseState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<CourseState> = {
  auth: loginReducer,
};
