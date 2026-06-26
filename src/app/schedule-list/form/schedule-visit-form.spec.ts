import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ScheduleVisitForm } from './schedule-visit-form';
import { AuthService } from 'src/auth/services/auth.service';
import { inputBinding } from '@angular/core';
import { mockBreweryData } from '@testing/integrations/memory-breweries-data/memory-breweries-data';

describe('ScheduleVisitForm', () => {
  let component: ScheduleVisitForm;
  let fixture: ComponentFixture<ScheduleVisitForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleVisitForm],
      providers: [
        provideRouter([]),
        {
          provide: AuthService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleVisitForm, {
      bindings: [inputBinding('brewery', () => mockBreweryData())],
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
