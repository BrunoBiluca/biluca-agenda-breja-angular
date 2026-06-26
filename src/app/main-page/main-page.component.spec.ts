import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { BreweriesData } from '@core/breweries/breweries-data.interface';
import { MemoryBreweriesData } from '@testing/integrations/memory-breweries-data/memory-breweries-data';
import { AuthService } from 'src/auth/services/auth.service';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  let service;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageComponent],
      providers: [
        { provide: BreweriesData, useClass: MemoryBreweriesData },
        {
          provide: AuthService,
          useValue: { getLoggedUser: () => ({ name: 'Ariane Brandão' }), logout: () => {} },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function createComponent() {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the main components', () => {
    createComponent();
    const title = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toContain(' Bora beber, Ariane Brandão ? ');

    const scheduleList = fixture.nativeElement.querySelector('#schedule');
    expect(scheduleList).toBeTruthy();

    const breweries = fixture.nativeElement.querySelector('#breweries');
    expect(breweries).toBeTruthy();
  });
});
