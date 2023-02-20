import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarMonthWeekViewComponent } from './ngx-calendar-month-week-view.component';

describe('NgxCalendarMonthWeekViewComponent', () => {
  let component: NgxCalendarMonthWeekViewComponent;
  let fixture: ComponentFixture<NgxCalendarMonthWeekViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCalendarMonthWeekViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCalendarMonthWeekViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
