import { Component } from '@angular/core';
import { DateTime } from 'luxon';
import { NgxCalendarService } from '../ngx-calendar.service';

@Component({
  selector: 'ngx-calendar-month-week-view',
  templateUrl: './ngx-calendar-month-week-view.component.html',
  styleUrls: ['./ngx-calendar-month-week-view.component.scss'],
})
export class NgxCalendarMonthWeekViewComponent {
  currentMonth$ = this.ngxCalendarService.currentMonth$;
  constructor(private readonly ngxCalendarService: NgxCalendarService) {}

  next(): void {
    this.ngxCalendarService.nextWeek();
  }

  previous(): void {
    this.ngxCalendarService.previousWeek();
  }
}
