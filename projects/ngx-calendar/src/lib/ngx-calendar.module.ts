import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxCalendarComponent } from './ngx-calendar.component';
import { NgxCalendarMonthComponent } from './ngx-calendar-month/ngx-calendar-month.component';
import { NgxCalendarWeekComponent } from './ngx-calendar-week/ngx-calendar-week.component';
import { NgxCalendarGridComponent } from './ngx-calendar-grid/ngx-calendar-grid.component';
import { NgxCalendarDateComponent } from './ngx-calendar-date/ngx-calendar-date.component';
import { NgxCalendarWeekViewComponent } from './ngx-calendar-grid-week-view/ngx-calendar-grid-week-view.component';
import { NgxCalendarMonthWeekViewComponent } from './ngx-calendar-month-week-view/ngx-calendar-month-week-view.component';
import { NgxCalendarDateWeekViewComponent } from './ngx-calendar-date-week-view/ngx-calendar-date-week-view.component';

@NgModule({
  declarations: [
    NgxCalendarComponent,
    NgxCalendarMonthComponent,
    NgxCalendarWeekComponent,
    NgxCalendarGridComponent,
    NgxCalendarDateComponent,
    NgxCalendarWeekViewComponent,
    NgxCalendarMonthWeekViewComponent,
    NgxCalendarDateWeekViewComponent,
  ],
  imports: [CommonModule],
  exports: [NgxCalendarComponent],
})
export class NgxCalendarModule {}
