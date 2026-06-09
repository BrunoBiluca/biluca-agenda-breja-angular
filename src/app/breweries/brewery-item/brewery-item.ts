import { Component, inject, input } from '@angular/core';
import type { Brewery } from '@core/breweries/brewery.model';
import { HlmCardImports } from '@ui/card/src';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brewery-item',
  imports: [HlmCardImports, RouterLink],
  templateUrl: './brewery-item.html',
})
export class BreweryItem {
  brewery = input.required<Brewery>();
}
