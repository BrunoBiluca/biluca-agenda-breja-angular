import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BreweriesData } from '@core/breweries/breweries-data.interface';
import { Brewery } from '@core/breweries/brewery.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenBreweryDbService extends BreweriesData {
  httpClient = inject(HttpClient);

  override get(breweryId: string): Promise<Brewery> {
    const url = `https://api.openbrewerydb.org/v1/breweries/${breweryId}`;
    return firstValueFrom(this.httpClient.get<Brewery>(url));
  }
  override getPage(page: number): Promise<Brewery[]> {
    try {
      const url = `https://api.openbrewerydb.org/v1/breweries?page=${page}&per_page=${this.pageSize}`;
      return firstValueFrom(this.httpClient.get<Brewery[]>(url));
    } catch (error) {
      console.log(error);
      return Promise.resolve([]);
    }
  }

  override getAll(): Promise<Brewery[]> {
    try {
      const url = 'https://api.openbrewerydb.org/v1/breweries';
      return firstValueFrom(this.httpClient.get<Brewery[]>(url));
    } catch (error) {
      console.log(error);
      return Promise.resolve([]);
    }
  }
}
