import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Login } from './login';
import { RouterModule } from '@angular/router';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [Login, RouterModule.forRoot([])],
      providers: [],
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
