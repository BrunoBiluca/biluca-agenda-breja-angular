import { Component, inject, signal, type OnInit, type OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreweriesData } from '@core/breweries/breweries-data.interface';
import type { Brewery } from '@core/breweries/brewery.model';
import { HlmCard, HlmCardHeader, HlmCardFooter } from '@ui/card/src';
import { switchMap, Subscription, from, catchError, EMPTY } from 'rxjs';

@Component({
  selector: 'app-brewery-detail',
  imports: [HlmCard, HlmCardHeader, HlmCardFooter],
  templateUrl: './brewery-detail.html',
})
export class BreweryDetail implements OnInit, OnDestroy {
  breweriesService = inject(BreweriesData);

  router = inject(Router);
  route = inject(ActivatedRoute);

  brewery = signal<Brewery | undefined>(undefined);
  private _sub?: Subscription;

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

  closeModal() {
    this.router.navigate(['/'], { relativeTo: this.route });
  }
}
