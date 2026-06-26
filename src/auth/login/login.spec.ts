import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Login } from './login';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [Login, RouterModule.forRoot([])],
      providers: [
        {
          provide: AuthService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
