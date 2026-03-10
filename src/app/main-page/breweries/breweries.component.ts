import { Component, inject, OnInit, signal } from '@angular/core';
import { BreweriesData } from '@core/breweries/breweries-data.interface';
import { Brewery } from '@core/breweries/brewery.model';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
})
export class BreweriesComponent implements OnInit {
  breweries = signal<Brewery[]>([]);

  breweriesService = inject(BreweriesData);

  ngOnInit() {
    this.breweriesService.getPage(1).then((breweries) => {
      this.breweries.set(breweries);
    });
  }
}
