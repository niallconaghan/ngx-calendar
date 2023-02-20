import { Component } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-app';
  datetime?: DateTime = DateTime.now();

  constructor() {}

  onChange(result: any): void {
    console.log(result);
  }

  clear() {
    this.datetime = undefined;
  }
}
