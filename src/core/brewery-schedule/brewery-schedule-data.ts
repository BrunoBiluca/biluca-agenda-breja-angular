import { Injectable } from '@angular/core';
import type { BreweryScheduleRequest } from '@core/brewery-schedule/models/brewery-schedule-request.model';
import type { BrewerySchedule } from '@core/brewery-schedule/models/brewery-schedule.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class BreweryScheduleData {
  onUpdateSchedules = new BehaviorSubject<BrewerySchedule[]>([]);

  abstract getAll(): Promise<BrewerySchedule[]>;
  abstract create(request: BreweryScheduleRequest): Promise<BrewerySchedule>;
  abstract cancel(schedule: BrewerySchedule): Promise<void>;
}
