import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweriesComponent } from './breweries.component';
import { BreweriesData } from '@core/breweries/breweries-data.interface';
import { MemoryBreweriesData } from '@testing/integrations/memory-breweries-data/memory-breweries-data';

describe('BreweriesComponent', () => {
  let component: BreweriesComponent;
  let fixture: ComponentFixture<BreweriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweriesComponent],
      providers: [{ provide: BreweriesData, useClass: MemoryBreweriesData }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const title = fixture.nativeElement.querySelector('h2');
    expect(title.textContent).toContain('Cervejarias');

    const loading = fixture.nativeElement.querySelector('[aria-label="loading"]');
    expect(loading).toBeTruthy();
  });
});
