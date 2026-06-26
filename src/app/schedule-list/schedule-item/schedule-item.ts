import { DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { BreweryScheduleData } from '@core/brewery-schedule/brewery-schedule-data';
import type { BrewerySchedule } from '@core/brewery-schedule/models/brewery-schedule.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTrash2 } from '@ng-icons/lucide';
import { HlmCard, HlmCardFooter, HlmCardHeader } from '@ui/card/src';

@Component({
  selector: 'app-schedule-item',
  imports: [HlmCard, HlmCardHeader, HlmCardFooter, NgIcon, DatePipe],
  templateUrl: './schedule-item.html',
  providers: [provideIcons({ lucideTrash2 })],
})
export class ScheduleItem {
  schedule = input.required<BrewerySchedule>();
  _scheduleDate = inject(BreweryScheduleData);

  cancelSchedule() {
    this._scheduleDate.cancel(this.schedule());
  }
}
