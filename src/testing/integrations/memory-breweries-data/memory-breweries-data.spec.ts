import { TestBed } from '@angular/core/testing';

import { MemoryBreweriesData } from './memory-breweries-data';

describe('MemoryOpenBreweryDb', () => {
  let service: MemoryBreweriesData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryBreweriesData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
