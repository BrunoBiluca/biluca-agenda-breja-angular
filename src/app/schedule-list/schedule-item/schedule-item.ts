import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideTrash2 } from '@ng-icons/lucide';
import { HlmCard, HlmCardFooter, HlmCardHeader } from '@ui/card/src';

@Component({
  selector: 'app-schedule-item',
  imports: [HlmCard, HlmCardHeader, HlmCardFooter, NgIcon],
  templateUrl: './schedule-item.html',
  providers: [provideIcons({ lucideTrash2 })],
})
export class ScheduleItem {}
