import { Component, inject, input, output, signal, type OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import type { ModalContentProps } from '@app/breweries/brewery-detail/brewery-detail';
import type { Brewery } from '@core/breweries/brewery.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX } from '@ng-icons/lucide';
import { HlmCardFooter, HlmCardHeader } from '@ui/card/src';
import { HlmField, HlmFieldDescription, HlmFieldError, HlmFieldLabel } from '@ui/field/src';
import { HlmIcon } from '@ui/icon/src';
import { HlmInput } from '@ui/input/src';

@Component({
  selector: 'app-schedule-visit-form',
  imports: [
    HlmCardHeader,
    HlmCardFooter,
    NgIcon,
    HlmIcon,
    HlmFieldDescription,
    HlmFieldLabel,
    HlmField,
    HlmFieldError,
    HlmInput,
    ReactiveFormsModule,
  ],
  templateUrl: './schedule-visit-form.html',
  providers: [provideIcons({ lucideX })],
})
export class ScheduleVisitForm implements OnInit {
  scheduleVisitForm!: FormGroup;
  router = inject(Router);
  route = inject(ActivatedRoute);

  brewery = input.required<Brewery | undefined>();
  modalContent = input.required<ModalContentProps>();
  onModalChange = output<ModalContentProps>();

  guests = signal(['Ana', 'Beto', 'Carla']);

  readonly submitSuccess = signal<boolean>(false);
  readonly submitMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.scheduleVisitForm = new FormGroup({
      visitDate: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
      ]),
      guests: new FormControl(this.guests(), [Validators.required]),
      observations: new FormControl('', [Validators.minLength(10)]),
    });
  }

  removeGuest(index: number) {
    const currentGuests = this.guests();
    const updated = currentGuests.filter((_, i) => i !== index);
    this.guests.set(updated);
    this.scheduleVisitForm.get('guests')?.setValue(updated);
    this.scheduleVisitForm.get('guests')?.markAsTouched();
  }

  registerGuest(guestName: string) {
    if (guestName) {
      this.guests.update((guests) => [...guests, guestName]);
      this.scheduleVisitForm.get('guests')?.setValue(this.guests());
      this.scheduleVisitForm.get('guests')?.markAsTouched();
    }
  }

  async onSubmit() {
    if (this.scheduleVisitForm.invalid) return;

    const { visitDate, guests, observations } = this.scheduleVisitForm.value;
    console.log('Agendando visita para:', { visitDate, guests, observations });

    try {
      //  chamada API para agendar visita
      this.submitSuccess.set(true);
      this.submitMessage.set('Visita agendada com sucesso!');
    } catch (error) {
      this.submitSuccess.set(false);
      this.submitMessage.set('Erro ao agendar visita: ' + error);
    }
  }

  goBackToDetails() {
    this.onModalChange.emit('brewery-detail');
  }

  closeModal() {
    this.router.navigate(['/'], { relativeTo: this.route });
  }
}
