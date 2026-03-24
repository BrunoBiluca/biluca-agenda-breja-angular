import { Component, inject, OnInit, signal } from '@angular/core';
import { BreweriesData } from '@core/breweries/breweries-data.interface';
import { Brewery } from '@core/breweries/brewery.model';
import { HlmCardImports } from '@ui/card/src';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  imports: [HlmCardImports],
})
export class BreweriesComponent implements OnInit {
  breweries = signal<Brewery[] | undefined>(undefined);

  breweriesService = inject(BreweriesData);

  ngOnInit() {
    this.breweriesService.getPage(1).then((breweries) => {
      this.breweries.set(breweries);
    });
  }
}
