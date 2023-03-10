import { Component } from '@angular/core';
import { NgxCalendarService } from '../ngx-calendar.service';

@Component({
  selector: 'ngx-calendar-month',
  templateUrl: './ngx-calendar-month.component.html',
  styleUrls: ['./ngx-calendar-month.component.scss'],
})
export class NgxCalendarMonthComponent {
  currentMonth$ = this.ngxCalendarService.currentMonth$;
  constructor(private readonly ngxCalendarService: NgxCalendarService) {}

  next(): void {
    this.ngxCalendarService.nextMonth();
  }

  previous(): void {
    this.ngxCalendarService.previousMonth();
  }
}
