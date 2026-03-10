import type { Brewery } from './brewery.model';

export abstract class BreweriesData {
  pageSize = 10;

  abstract get(breweryId: string): Promise<Brewery>;
  abstract getPage(page: number): Promise<Brewery[]>;
  abstract getAll(): Promise<Brewery[]>;
}
