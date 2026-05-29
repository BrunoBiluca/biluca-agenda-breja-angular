import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreweryNotFound } from './brewery-not-found';

describe('BreweryNotFound', () => {
  let component: BreweryNotFound;
  let fixture: ComponentFixture<BreweryNotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryNotFound],
    }).compileComponents();

    fixture = TestBed.createComponent(BreweryNotFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
