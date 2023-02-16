import { Component } from '@angular/core';
import { NgxCalendarService } from '../ngx-calendar.service';

@Component({
  selector: 'lib-ngx-calendar-week',
  templateUrl: './ngx-calendar-week.component.html',
  styleUrls: ['./ngx-calendar-week.component.scss'],
})
export class NgxCalendarWeekComponent {
  constructor(public readonly ngxCalendarService: NgxCalendarService) {}
}
