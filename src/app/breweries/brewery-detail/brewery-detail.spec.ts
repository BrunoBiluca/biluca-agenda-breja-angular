import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { BreweryDetail } from './brewery-detail';
import { BreweriesData } from '@core/breweries/breweries-data.interface';
import { MemoryBreweriesData } from '@testing/integrations/memory-breweries-data/memory-breweries-data';

describe('BreweryDetail', () => {
  let component: BreweryDetail;
  let fixture: ComponentFixture<BreweryDetail>;
  let memorySvc: MemoryBreweriesData;

  beforeEach(async () => {
    memorySvc = new MemoryBreweriesData();
    await TestBed.configureTestingModule({
      imports: [BreweryDetail],
      providers: [
        { provide: BreweriesData, useValue: memorySvc },
        { provide: Router, useValue: { navigate: vi.fn().mockResolvedValue(true) } },
      ],
    }).compileComponents();
  });

  it('should set brewery when it exists', async () => {
    const id = memorySvc.breweries[0].id;
    TestBed.overrideProvider(ActivatedRoute, { useValue: { params: of({ breweryId: id }) } });
    fixture = TestBed.createComponent(BreweryDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();

    expect(component).toBeTruthy();
    expect(component.brewery()).toBeTruthy();
    const router = TestBed.inject(Router) as any;
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it("should navigate to '/brewery-not-found' when brewery doesn't exist", async () => {
    TestBed.overrideProvider(ActivatedRoute, {
      useValue: { params: of({ breweryId: 'non-existing-id' }) },
    });
    fixture = TestBed.createComponent(BreweryDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();

    const router = TestBed.inject(Router) as any;
    expect(router.navigate).toHaveBeenCalledWith(['/brewery-not-found'], {
      relativeTo: TestBed.inject(ActivatedRoute),
    });
  });
});
