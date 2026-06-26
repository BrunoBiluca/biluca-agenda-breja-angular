import { Component, inject, signal, type OnInit, OnDestroy } from '@angular/core';
import { ScheduleItem } from './schedule-item/schedule-item';
import { BreweryScheduleData } from '@core/brewery-schedule/brewery-schedule-data';
import type { BrewerySchedule } from '@core/brewery-schedule/models/brewery-schedule.model';
import type { Subscription } from 'rxjs';

@Component({
  selector: 'app-schedule-list',
  imports: [ScheduleItem],
  templateUrl: './schedule-list.html',
})
export class ScheduleList implements OnInit, OnDestroy {
  scheduleData = inject(BreweryScheduleData);
  schedule = signal<BrewerySchedule[]>([]);
  loading = signal(true);
  private schedulesSub?: Subscription;

  ngOnInit(): void {
    try {
      this.scheduleData.getAll().then((data) => {
        this.schedule.set(data);
        this.loading.set(false);
        console.log('Schedules fetched successfully:', data);
      });
    } catch (error) {
      console.error('Error fetching schedules:', error);
      this.loading.set(false);
    }
    this.schedulesSub = this.scheduleData.onUpdateSchedules.subscribe((schedules) =>
      this.schedule.set(schedules),
    );
  }

  ngOnDestroy(): void {
    this.schedulesSub?.unsubscribe();
  }
}
