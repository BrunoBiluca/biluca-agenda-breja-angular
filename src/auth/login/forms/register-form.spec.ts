import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterForm } from './register-form';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/auth/services/auth.service';

describe('RegisterForm', () => {
  let component: RegisterForm;
  let fixture: ComponentFixture<RegisterForm>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RegisterForm, RouterModule.forRoot([])],
      providers: [
        {
          provide: AuthService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
