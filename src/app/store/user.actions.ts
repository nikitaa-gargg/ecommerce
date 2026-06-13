import { createAction, props } from '@ngrx/store';

export interface UserFormValue {
  name: string;
  email: string;
}

export const submitUser = createAction(
  '[User] Submit User',
  props<{ user: UserFormValue }>()
);

export const clearUser = createAction('[User] Clear User');
