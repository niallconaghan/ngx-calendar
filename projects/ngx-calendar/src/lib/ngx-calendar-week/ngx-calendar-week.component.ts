import { Component } from '@angular/core';
import { NgxCalendarService } from '../ngx-calendar.service';

@Component({
  selector: 'ngx-calendar-week',
  templateUrl: './ngx-calendar-week.component.html',
  styleUrls: ['./ngx-calendar-week.component.scss'],
})
export class NgxCalendarWeekComponent {
  weekdays?: string[];
  constructor(public readonly ngxCalendarService: NgxCalendarService) {
    this.weekdays = this.ngxCalendarService.getWeekdays();
  }
}
