import { Injectable } from '@angular/core';

import { DateTime, Info } from 'luxon';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgxCalendarService {
  currentMonth$ = new BehaviorSubject<DateTime>(DateTime.now());
  selectedDate$ = new BehaviorSubject<DateTime | undefined>(undefined);

  get currentMonth(): DateTime {
    return this.currentMonth$.value;
  }

  dateSelected$ = new Subject<DateTime>();

  constructor() {}

  setDatetime(value: DateTime): void {
    this.selectedDate$.next(value);
    this.currentMonth$.next(value);
  }

  getWeekdays(): string[] {
    return Info.weekdays('short');
  }

  nextMonth(): void {
    this.currentMonth$.next(this.currentMonth$.value.plus({ month: 1 }));
  }

  previousMonth(): void {
    this.currentMonth$.next(this.currentMonth$.value.plus({ month: -1 }));
  }
}
