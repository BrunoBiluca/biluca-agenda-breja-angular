import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterForm } from './register-form';
import { RouterModule } from '@angular/router';

describe('RegisterForm', () => {
  let component: RegisterForm;
  let fixture: ComponentFixture<RegisterForm>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RegisterForm, RouterModule.forRoot([])],
      providers: [],
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
