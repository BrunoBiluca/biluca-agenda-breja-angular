import { Component, inject, signal, type OnInit, type OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleVisitForm } from '@app/schedule-list/form/schedule-visit-form';
import { BreweriesData } from '@core/breweries/breweries-data.interface';
import type { Brewery } from '@core/breweries/brewery.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMapPin, lucideX } from '@ng-icons/lucide';
import { HlmCard, HlmCardHeader, HlmCardFooter } from '@ui/card/src';
import { HlmIcon } from '@ui/icon/src';
import { switchMap, Subscription, from, catchError, EMPTY } from 'rxjs';

export type ModalContentProps = 'brewery-detail' | 'schedule-visit-form';

@Component({
  selector: 'app-brewery-detail',
  imports: [HlmCard, HlmCardHeader, HlmCardFooter, NgIcon, HlmIcon, ScheduleVisitForm],
  providers: [provideIcons({ lucideX, lucideMapPin })],
  templateUrl: './brewery-detail.html',
})
export class BreweryDetail implements OnInit, OnDestroy {
  breweriesService = inject(BreweriesData);

  router = inject(Router);
  route = inject(ActivatedRoute);

  brewery = signal<Brewery | undefined>(undefined);
  private _sub?: Subscription;

  modalContent = signal<ModalContentProps>('brewery-detail');

  ngOnInit() {
    this._sub = this.route.params
      .pipe(
        switchMap((params) =>
          from(this.breweriesService.get(params['breweryId'])).pipe(
            catchError(() => {
              this.router.navigate(['/brewery-not-found'], { relativeTo: this.route });
              return EMPTY;
            }),
          ),
        ),
      )
      .subscribe((b) => {
        this.brewery.set(b);
      });
  }

  ngOnDestroy() {
    this._sub?.unsubscribe();
  }

  handleModalChange(newContent: ModalContentProps) {
    this.modalContent.set(newContent);
  }

  closeModal() {
    this.router.navigate(['/'], { relativeTo: this.route });
  }
}
