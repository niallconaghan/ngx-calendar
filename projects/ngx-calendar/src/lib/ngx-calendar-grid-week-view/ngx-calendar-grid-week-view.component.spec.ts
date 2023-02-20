import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarWeekViewComponent } from './ngx-calendar-grid-week-view.component';

describe('NgxCalendarWeekViewComponent', () => {
  let component: NgxCalendarWeekViewComponent;
  let fixture: ComponentFixture<NgxCalendarWeekViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxCalendarWeekViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxCalendarWeekViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
