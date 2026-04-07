import { Component } from '@angular/core';
import { HlmField, HlmFieldError, HlmFieldGroup, HlmFieldLabel, HlmFieldSet } from '@ui/field/src';
import { HlmButton } from '@ui/button/src';
import { HlmInput } from '@ui/input/src';

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
  ],
  templateUrl: './login-form.html',
})
export class LoginForm {}
