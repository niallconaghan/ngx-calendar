import { ChangeDetectorRef, Component } from '@angular/core';
import { DateTime } from 'luxon';
import { NgxCalendarService } from '../ngx-calendar.service';

@Component({
  selector: 'ngx-calendar-grid-week-view',
  templateUrl: './ngx-calendar-grid-week-view.component.html',
  styleUrls: ['./ngx-calendar-grid-week-view.component.scss'],
})
export class NgxCalendarWeekViewComponent {
  startOfWeek!: DateTime;

  weekdays?: DateTime[];

  constructor(private readonly ngxCalendarService: NgxCalendarService) {
    this.ngxCalendarService.currentMonth$.subscribe((datetime: DateTime) => {
      this.startOfWeek = datetime.startOf('week');

      const week = new Array<number>(7)
        .fill(0)
        .map((value: number, index: number) => {
          return this.startOfWeek.plus({ days: index });
        });

      this.weekdays = week;
    });
  }
}
