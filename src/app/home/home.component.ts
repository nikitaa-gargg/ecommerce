import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { clearUser, submitUser } from '../store/user.actions';
import { AppState } from '../store/user.reducer';
import { selectLastUpdated, selectSubmittedUser } from '../store/user.selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  userForm: FormGroup;
  submittedUser$;
  lastUpdated$;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.submittedUser$ = this.store.select(selectSubmittedUser);
    this.lastUpdated$ = this.store.select(selectLastUpdated);
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.store.dispatch(submitUser({ user: this.userForm.value }));
  }

  resetForm() {
    this.store.dispatch(clearUser());
    this.userForm.reset();
  }
}