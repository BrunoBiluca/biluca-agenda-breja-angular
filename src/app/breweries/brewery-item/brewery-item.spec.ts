import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreweryItem } from './brewery-item';
import { provideRouter } from '@angular/router';
import { inputBinding } from '@angular/core';
import { mockBreweryData } from '@testing/integrations/memory-breweries-data/memory-breweries-data';

describe('BreweryItem', () => {
  let component: BreweryItem;
  let fixture: ComponentFixture<BreweryItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryItem],
      providers: [provideRouter([]), { provide: mockBreweryData, useValue: mockBreweryData() }],
    }).compileComponents();

    fixture = TestBed.createComponent(BreweryItem, {
      bindings: [inputBinding('brewery', () => mockBreweryData())],
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
