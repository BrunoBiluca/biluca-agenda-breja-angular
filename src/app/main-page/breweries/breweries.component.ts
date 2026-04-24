import { Component, inject, OnInit, signal } from '@angular/core';
import { BreweriesData } from '@core/breweries/breweries-data.interface';
import { Brewery } from '@core/breweries/brewery.model';
import { HlmCardImports } from '@ui/card/src';
import { BreweryItem } from './brewery-item';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  imports: [HlmCardImports, BreweryItem],
})
export class BreweriesComponent implements OnInit {
  breweries = signal<Brewery[] | undefined>(undefined);

  breweriesService = inject(BreweriesData);
  page = signal<number>(1);
  loadingMore = signal<boolean>(false);
  hasMore = signal<boolean>(true);

  ngOnInit() {
    this.breweriesService.getPage(this.page()).then((breweries) => {
      this.breweries.set(breweries);
    });
  }

  loadMore() {
    this.page.set(this.page() + 1);
    this.loadingMore.set(true);
    this.breweriesService.getPage(this.page()).then((breweries) => {
      this.loadingMore.set(false);
      if (breweries.length === 0) {
        this.hasMore.set(breweries.length === 0);
        return;
      }
      this.breweries.set([...this.breweries()!, ...breweries]);
    });
  }
}
