import { Component, inject, signal, type OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { HlmField, HlmFieldError, HlmFieldGroup, HlmFieldLabel, HlmFieldSet } from '@ui/field/src';
import { HlmButton } from '@ui/button/src';
import { HlmInput } from '@ui/input/src';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [
    HlmFieldError,
    HlmFieldLabel,
    HlmButton,
    HlmField,
    HlmFieldSet,
    HlmFieldGroup,
    HlmInput,
    ReactiveFormsModule,
  ],
  templateUrl: './login-form.html',
})
export class LoginForm implements OnInit {
  loginForm!: FormGroup;
  private readonly _authService = inject(AuthService);
  private _router = inject(Router);
  readonly submitMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  async onSubmit() {
    if (this.loginForm.invalid) return;

    try {
      const { email, password } = this.loginForm.value;
      await this._authService.login(email!, password!);
      this._router.navigate(['/']);
    } catch (error) {
      this.submitMessage.set('Falha no login. Verifique suas credenciais.');
    }
  }
}
