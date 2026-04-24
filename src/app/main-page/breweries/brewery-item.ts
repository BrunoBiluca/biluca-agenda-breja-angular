import { Component, input } from '@angular/core';
import type { Brewery } from '@core/breweries/brewery.model';
import { HlmCardImports } from '@ui/card/src';

@Component({
  selector: 'app-brewery-item',
  imports: [HlmCardImports],
  templateUrl: './brewery-item.html',
})
export class BreweryItem {
  brewery = input.required<Brewery>();
}
