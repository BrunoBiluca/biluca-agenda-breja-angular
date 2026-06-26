import { Component, inject, input, output, signal, type OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import type { ModalContentProps } from '@app/breweries/brewery-detail/brewery-detail';
import type { Brewery } from '@core/breweries/brewery.model';
import { BreweryScheduleData } from '@core/brewery-schedule/brewery-schedule-data';
import { BreweryScheduleRequest } from '@core/brewery-schedule/models/brewery-schedule-request.model';
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
  _router = inject(Router);
  _route = inject(ActivatedRoute);
  _schedules = inject(BreweryScheduleData);

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
    const scheduleData = new BreweryScheduleRequest(
      this.brewery()?.id!,
      this.brewery()?.name!,
      new Date(visitDate),
      guests,
      observations || '',
    );
    try {
      await this._schedules.create(scheduleData);
      this.submitSuccess.set(true);
      this.submitMessage.set('Visita agendada com sucesso!');
      this._router.navigate(['/']);
    } catch (error) {
      this.submitSuccess.set(false);
      this.submitMessage.set('Erro ao agendar visita: ' + error);
    }
  }

  goBackToDetails() {
    this.onModalChange.emit('brewery-detail');
  }

  closeModal() {
    this._router.navigate(['/'], { relativeTo: this._route });
  }
}
