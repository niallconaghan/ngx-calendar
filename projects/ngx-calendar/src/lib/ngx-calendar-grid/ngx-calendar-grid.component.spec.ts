import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarGridComponent } from './ngx-calendar-grid.component';

describe('NgxCalendarGridComponent', () => {
  let component: NgxCalendarGridComponent;
  let fixture: ComponentFixture<NgxCalendarGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCalendarGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCalendarGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
