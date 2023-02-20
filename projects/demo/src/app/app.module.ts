import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCalendarModule } from '../../../ngx-calendar/src/lib/ngx-calendar.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCalendarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
