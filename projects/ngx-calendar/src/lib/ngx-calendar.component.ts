import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { DateTime } from 'luxon';
import { Subject, takeUntil } from 'rxjs';
import { NgxCalendarService } from './ngx-calendar.service';

@Component({
  selector: 'ngx-calendar',
  templateUrl: './ngx-calendar.component.html',
  styleUrls: ['./ngx-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxCalendarComponent implements OnDestroy {
  @Input() set datetime(value: DateTime) {
    this.ngxCalendarService.setDatetime(value);
  }

  @Output() datetimeChange = new EventEmitter<DateTime>();

  /**
   * @ignore
   */
  private readonly _destroy$: Subject<void> = new Subject<void>();

  constructor(private readonly ngxCalendarService: NgxCalendarService) {
    this.ngxCalendarService.dateSelected$
      .pipe(takeUntil(this._destroy$))
      .subscribe((datetime: DateTime) => {
        this.ngxCalendarService.setDatetime(datetime);
        this.datetimeChange.emit(datetime);
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
