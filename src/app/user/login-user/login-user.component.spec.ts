import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginUserComponent} from './login-user.component';

describe('LoginUserComponent', () => {
  let component: LoginUserComponent;
  let fixture: ComponentFixture<LoginUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginUserComponent]
    })
<<<<<<< Updated upstream:src/app/user/login-user/login-user.component.spec.ts
      .compileComponents();
=======
    .compileComponents();
>>>>>>> Stashed changes:src/app/component/login-user/login-user.component.spec.ts

    fixture = TestBed.createComponent(LoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
