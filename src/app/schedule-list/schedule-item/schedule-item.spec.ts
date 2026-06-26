import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleItem } from './schedule-item';
import { inputBinding } from '@angular/core';
import { BreweryScheduleData } from '@core/brewery-schedule/brewery-schedule-data';
import type { BrewerySchedule } from '@core/brewery-schedule/models/brewery-schedule.model';

describe('ScheduleItem', () => {
  let component: ScheduleItem;
  let fixture: ComponentFixture<ScheduleItem>;

  const breweryScheduleMock: BrewerySchedule = {
    id: '1',
    breweryId: '2',
    breweryName: 'Bar do Jola',
    visitDate: new Date(),
    party: ['Ariane', 'Bruno'],
    notes: 'Não esquecer de levar o cooler.',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleItem, {
      bindings: [inputBinding('schedule', () => breweryScheduleMock)],
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
