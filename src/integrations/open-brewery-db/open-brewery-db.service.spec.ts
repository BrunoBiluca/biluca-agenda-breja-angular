/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { OpenBreweryDbService } from './open-brewery-db.service';

describe('Service: OpenBreweryDb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenBreweryDbService],
    });
  });

  it('should ...', inject([OpenBreweryDbService], (service: OpenBreweryDbService) => {
    expect(service).toBeTruthy();
  }));
});
