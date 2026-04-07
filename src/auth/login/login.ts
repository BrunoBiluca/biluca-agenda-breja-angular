import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { LoginForm } from './forms/login-form';
import { RegisterForm } from './forms/register-form';

@Component({
  selector: 'app-login',
  imports: [NgClass, LoginForm, RegisterForm],
  templateUrl: './login.html',
})
export class Login {
  formType = signal<'register' | 'login'>('register');
}
