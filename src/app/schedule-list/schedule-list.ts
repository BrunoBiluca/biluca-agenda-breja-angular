import { Component } from '@angular/core';
import { ScheduleItem } from './schedule-item/schedule-item';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLoaderCircle } from '@ng-icons/lucide';

@Component({
  selector: 'app-schedule-list',
  imports: [ScheduleItem, NgIcon],
  templateUrl: './schedule-list.html',
  providers: [provideIcons({ lucideLoaderCircle })],
})
export class ScheduleList {}
