import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HlmCard, HlmCardFooter, HlmCardHeader } from '@ui/card/src';

@Component({
  selector: 'app-brewery-not-found',
  imports: [HlmCard, HlmCardHeader, HlmCardFooter],
  templateUrl: './brewery-not-found.html',
})
export class BreweryNotFound {
  router = inject(Router);
  route = inject(ActivatedRoute);

  closeModal() {
    this.router.navigate(['/'], { relativeTo: this.route });
  }
}
