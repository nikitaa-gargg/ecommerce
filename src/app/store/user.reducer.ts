import { createReducer, on } from '@ngrx/store';

import { clearUser, submitUser, UserFormValue } from './user.actions';

export interface UserState {
  submittedUser: UserFormValue | null;
  lastUpdated: string | null;
}

export interface AppState {
  user: UserState;
}

export const initialUserState: UserState = {
  submittedUser: null,
  lastUpdated: null,
};

export const userReducer = createReducer(
  initialUserState,
  on(submitUser, (state, { user }) => ({
    ...state,
    submittedUser: user,
    lastUpdated: new Date().toISOString(),
  })),
  on(clearUser, () => initialUserState)
);
