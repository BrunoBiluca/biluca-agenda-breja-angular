import { TestBed } from '@angular/core/testing';

import { MemoryScheduleData } from './memory-schedule-data';

describe('MemoryScheduleData', () => {
  let service: MemoryScheduleData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryScheduleData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
