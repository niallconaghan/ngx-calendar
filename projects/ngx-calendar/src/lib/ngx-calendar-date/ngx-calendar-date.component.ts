import {
  Component,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { DateTime } from 'luxon';
import { Subject, takeUntil } from 'rxjs';
import { NgxCalendarService } from '../ngx-calendar.service';

@Component({
  selector: 'button [ngx-calendar-date]',
  templateUrl: './ngx-calendar-date.component.html',
  styleUrls: ['./ngx-calendar-date.component.scss'],
})
export class NgxCalendarDateComponent implements OnDestroy {
  @Input() date!: number;
  selectedDate?: DateTime;

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly ngxCalendarService: NgxCalendarService) {
    this.ngxCalendarService.selectedDate$
      .pipe(takeUntil(this.destroy$))
      .subscribe((selectedDate: DateTime | undefined) => {
        this.selectedDate = selectedDate;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('click')
  onClick(): void {
    this.ngxCalendarService.dateSelected$.next(
      this.ngxCalendarService.currentMonth.set({ day: this.date })
    );
  }

  @HostBinding('style.grid-column')
  get gridOffset() {
    return this.date === 1
      ? this.ngxCalendarService.currentMonth.startOf('month').weekday
      : null;
  }

  @HostBinding('class.ngx-calendar-today')
  get isToday() {
    return (
      this.date === DateTime.now().day &&
      this.ngxCalendarService.currentMonth.month === DateTime.now().month &&
      this.ngxCalendarService.currentMonth.year === DateTime.now().year
    );
  }

  @HostBinding('class.ngx-calendar-selected')
  get isSelected() {
    return (
      this.date === this.selectedDate?.day &&
      this.ngxCalendarService.currentMonth.month === this.selectedDate?.month &&
      this.ngxCalendarService.currentMonth.year === this.selectedDate?.year
    );
  }
}
