import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarWeekComponent } from './ngx-calendar-week.component';

describe('NgxCalendarWeekComponent', () => {
  let component: NgxCalendarWeekComponent;
  let fixture: ComponentFixture<NgxCalendarWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCalendarWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCalendarWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
