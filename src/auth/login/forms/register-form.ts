import { Component } from '@angular/core';
import { HlmButton } from '@ui/button/src';
import { HlmFieldError, HlmFieldLabel, HlmField, HlmFieldSet, HlmFieldGroup } from '@ui/field/src';
import { HlmInput } from '@ui/input/src';

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
  ],
})
export class RegisterForm {}
