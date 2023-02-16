import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxCalendarComponent } from './ngx-calendar.component';
import { NgxCalendarMonthComponent } from './ngx-calendar-month/ngx-calendar-month.component';
import { NgxCalendarWeekComponent } from './ngx-calendar-week/ngx-calendar-week.component';

@NgModule({
  declarations: [NgxCalendarComponent, NgxCalendarMonthComponent, NgxCalendarWeekComponent],
  imports: [CommonModule],
  exports: [NgxCalendarComponent],
})
export class NgxCalendarModule {}
