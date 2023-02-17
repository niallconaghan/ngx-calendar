import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarDateComponent } from './ngx-calendar-date.component';

describe('NgxCalendarDateComponent', () => {
  let component: NgxCalendarDateComponent;
  let fixture: ComponentFixture<NgxCalendarDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCalendarDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCalendarDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
