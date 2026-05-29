import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreweryItem } from './brewery-item';

describe('BreweryItem', () => {
  let component: BreweryItem;
  let fixture: ComponentFixture<BreweryItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryItem],
    }).compileComponents();

    fixture = TestBed.createComponent(BreweryItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
