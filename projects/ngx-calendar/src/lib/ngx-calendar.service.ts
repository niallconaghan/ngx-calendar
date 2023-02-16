import { Injectable } from '@angular/core';

import { DateTime, Info } from 'luxon';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgxCalendarService {
  currentMonth$ = new BehaviorSubject<DateTime>(DateTime.now());

  constructor() {}

  setDatetime(value: DateTime): void {
    this.currentMonth$.next(value);
  }

  getWeekdays(): string[] {
    return Info.weekdays('narrow');
  }
}
