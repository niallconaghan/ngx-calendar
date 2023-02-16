import { Component, Input } from '@angular/core';
import { DateTime } from 'luxon';
import { NgxCalendarService } from './ngx-calendar.service';

@Component({
  selector: 'lib-ngx-calendar',
  templateUrl: './ngx-calendar.component.html',
  styleUrls: ['./ngx-calendar.component.scss'],
  styles: [],
})
export class NgxCalendarComponent {
  @Input() set datetime(value: DateTime) {
    this.ngxCalendarService.setDatetime(value);
  }

  constructor(private readonly ngxCalendarService: NgxCalendarService) {}
}
