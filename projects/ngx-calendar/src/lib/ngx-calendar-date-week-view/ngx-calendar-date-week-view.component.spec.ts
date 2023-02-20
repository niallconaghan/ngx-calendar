import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarDateWeekViewComponent } from './ngx-calendar-date-week-view.component';

describe('NgxCalendarDateWeekViewComponent', () => {
  let component: NgxCalendarDateWeekViewComponent;
  let fixture: ComponentFixture<NgxCalendarDateWeekViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCalendarDateWeekViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCalendarDateWeekViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
