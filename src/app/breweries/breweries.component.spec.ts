import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweriesComponent } from './breweries.component';
import { BreweriesData } from '@core/breweries/breweries-data.interface';
import { MemoryBreweriesData } from '@testing/integrations/memory-breweries-data/memory-breweries-data';
import { storeSetting } from '@testing/standalone-mode/standalone-mode';

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
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  function createComponent() {
    fixture = TestBed.createComponent(BreweriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  it('should create', () => {
    createComponent();
    const title = fixture.nativeElement.querySelector('h2');
    expect(title.textContent).toContain('Cervejarias');

    const loading = fixture.nativeElement.querySelector('[aria-label="loading"]');
    expect(loading).toBeTruthy();
  });

  it('should show breweries', async () => {
    createComponent();

    await vi.runAllTimersAsync();

    const loading = fixture.nativeElement.querySelector('[aria-label="loading"]');
    expect(loading).not.toBeTruthy();

    const breweries = fixture.nativeElement.querySelectorAll('[role="listitem"]');
    expect(breweries.length).toBe(10);
  });

  it('should show message when no breweries are found', async () => {
    storeSetting('breweries-count', 0);
    createComponent();

    await vi.runAllTimersAsync();

    const breweries = fixture.nativeElement.querySelectorAll('[role="listitem"]');
    expect(breweries.length).toBe(0);

    const message = fixture.nativeElement.querySelector('p');
    expect(message.textContent).toContain('Nenhuma cervejaria encontrada');
  });
});
