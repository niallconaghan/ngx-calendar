import { Injectable } from '@angular/core';

import { DateTime, Info } from 'luxon';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class NgxCalendarService {
  currentMonth$ = new BehaviorSubject<DateTime>(DateTime.now());
  selectedDate$ = new BehaviorSubject<DateTime | undefined>(undefined);

  get currentMonth(): DateTime {
    return this.currentMonth$.value;
  }

  dateSelected$ = new Subject<DateTime>();

  constructor() {}

  setDatetime(value: DateTime | undefined): void {
    this.selectedDate$.next(value);
    this.currentMonth$.next(value ?? DateTime.now());
  }

  getWeekdays(): string[] {
    return Info.weekdays('short');
  }

  nextWeek(): void {
    this.currentMonth$.next(this.currentMonth$.value.plus({ week: 1 }));
  }

  previousWeek(): void {
    this.currentMonth$.next(this.currentMonth$.value.plus({ week: -1 }));
  }

  nextMonth(): void {
    this.currentMonth$.next(this.currentMonth$.value.plus({ month: 1 }));
  }

  previousMonth(): void {
    this.currentMonth$.next(this.currentMonth$.value.plus({ month: -1 }));
  }
}
