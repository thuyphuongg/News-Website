import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterUserComponent} from './register-user.component';

describe('RegisterUserComponent', () => {
  let component: RegisterUserComponent;
  let fixture: ComponentFixture<RegisterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterUserComponent]
    })
<<<<<<< Updated upstream:src/app/user/register-user/register-user.component.spec.ts
      .compileComponents();
=======
    .compileComponents();
>>>>>>> Stashed changes:src/app/component/register-user/register-user.component.spec.ts

    fixture = TestBed.createComponent(RegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
