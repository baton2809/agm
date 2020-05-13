import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login] Login Action',
  props<{ token: object }>()
);

export const logout = createAction(
  '[Login] Logout Action'
);
