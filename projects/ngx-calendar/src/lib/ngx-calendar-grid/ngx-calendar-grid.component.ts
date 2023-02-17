import { Component, OnDestroy } from '@angular/core';
import { DateTime } from 'luxon';
import { Subject, takeUntil } from 'rxjs';
import { NgxCalendarService } from '../ngx-calendar.service';

@Component({
  selector: 'lib-ngx-calendar-grid',
  templateUrl: './ngx-calendar-grid.component.html',
  styleUrls: ['./ngx-calendar-grid.component.scss'],
})
export class NgxCalendarGridComponent implements OnDestroy {
  dates?: number[];
  selectedDate?: DateTime;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly ngxCalendarService: NgxCalendarService) {
    this.ngxCalendarService.selectedDate$
      .pipe(takeUntil(this.destroy$))
      .subscribe((selectedDate: DateTime | undefined) => {
        this.selectedDate = selectedDate;
      });

    this.ngxCalendarService.currentMonth$
      .pipe(takeUntil(this.destroy$))
      .subscribe((datetime: DateTime) => {
        this.dates = Array.from(
          { length: datetime.daysInMonth },
          (_, date) => date + 1
        );
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
