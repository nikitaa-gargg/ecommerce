import { createSelector } from '@ngrx/store';

import { AppState } from './user.reducer';

export const selectUserState = (state: AppState) => state.user;

export const selectSubmittedUser = createSelector(
  selectUserState,
  (state) => state.submittedUser
);

export const selectLastUpdated = createSelector(
  selectUserState,
  (state) => state.lastUpdated
);
