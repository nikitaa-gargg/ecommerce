import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideMockStore({ initialState: { user: { submittedUser: null, lastUpdated: null } } })]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 1. Component Creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 2. Form Creation
  it('should create userForm', () => {
    expect(component.userForm).toBeTruthy();
  });

  // 3. Name Control Exists
  it('should contain name control', () => {
    expect(component.userForm.get('name')).toBeTruthy();
  });

  // 4. Email Control Exists
  it('should contain email control', () => {
    expect(component.userForm.get('email')).toBeTruthy();
  });

  // 5. Name Required Validation
  it('should make name field invalid when empty', () => {
    const nameControl = component.userForm.get('name');

    nameControl?.setValue('');

    expect(nameControl?.valid).toBeFalse();
    expect(nameControl?.errors?.['required']).toBeTruthy();
  });

  // 6. Email Required Validation
  it('should make email field invalid when empty', () => {
    const emailControl = component.userForm.get('email');

    emailControl?.setValue('');

    expect(emailControl?.valid).toBeFalse();
    expect(emailControl?.errors?.['required']).toBeTruthy();
  });

  // 7. Invalid Email Validation
  it('should invalidate incorrect email format', () => {
    const emailControl = component.userForm.get('email');

    emailControl?.setValue('abc');

    expect(emailControl?.valid).toBeFalse();
    expect(emailControl?.errors?.['email']).toBeTruthy();
  });

  // 8. Valid Form
  it('should make form valid when all fields are correct', () => {
    component.userForm.setValue({
      name: 'Nikita',
      email: 'nikita@gmail.com'
    });

    expect(component.userForm.valid).toBeTrue();
  });

  // 9. onSubmit Method Call
  it('should call onSubmit method', () => {
    spyOn(component, 'onSubmit');

    component.onSubmit();

    expect(component.onSubmit).toHaveBeenCalled();
  });

  // 10. Console Log Verification
  it('should log form values on submit', () => {
    spyOn(console, 'log');

    component.userForm.setValue({
      name: 'Nikita',
      email: 'nikita@gmail.com'
    });

    component.onSubmit();

    expect(console.log).toHaveBeenCalledWith({
      name: 'Nikita',
      email: 'nikita@gmail.com'
    });
  });
});