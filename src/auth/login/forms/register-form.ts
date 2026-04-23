import { Component, inject, output, signal, type OnInit } from '@angular/core';
import { HlmButton } from '@ui/button/src';
import { HlmFieldError, HlmFieldLabel, HlmField, HlmFieldSet, HlmFieldGroup } from '@ui/field/src';
import { HlmInput } from '@ui/input/src';
import { AuthService } from '../../services/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  type AbstractControl,
  type ValidationErrors,
} from '@angular/forms';
import { checkPasswordStrength } from '@lib/password-validation';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.html',
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
})
export class RegisterForm implements OnInit {
  registerForm!: FormGroup;
  private readonly _authService = inject(AuthService);
  readonly submitSuccess = signal<boolean>(false);
  readonly submitMessage = signal<string | null>(null);
  readonly passwordStrengthMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      },
      {
        validators: this.passwordStrengthValidator,
      },
    );
  }

  passwordStrengthValidator = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    if (!password) return null;

    const strength = checkPasswordStrength(password);
    return strength.isSecure ? null : { weakPassword: true };
  };

  getPasswordStrengthMessage(password: string) {
    const strength = checkPasswordStrength(password);
    this.passwordStrengthMessage.set(strength.message);
  }

  async onSubmit() {
    if (this.registerForm.invalid) return;

    const { name, email, password } = this.registerForm.value;
    try {
      await this._authService.signup(email!, password!, name!);
      this.submitSuccess.set(true);
      this.submitMessage.set('Cadastro realizado com sucesso!');
    } catch (error) {
      this.submitSuccess.set(false);
      this.submitMessage.set('Falha no cadastro: ' + error);
    }
  }
}
