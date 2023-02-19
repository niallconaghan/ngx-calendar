import {
  Story,
  Meta,
  moduleMetadata,
  componentWrapperDecorator,
} from '@storybook/angular';
import { DateTime } from 'luxon';
import { NgxCalendarComponent, NgxCalendarModule } from 'ngx-calendar';

export default {
  title: 'Example/Calendar',
  component: NgxCalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [NgxCalendarModule],
    }),
  ],
  argTypes: { datetimeChange: { action: 'date selected' } },
} as Meta;

const Template: Story<NgxCalendarComponent> = (args: NgxCalendarComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.decorators = [
  componentWrapperDecorator(
    (story) => `<div style="width: 300px">${story}</div>`
  ),
];

Default.args = {
  datetime: undefined,
} as unknown as Partial<NgxCalendarComponent>;

export const SelectedDate = Template.bind({});

SelectedDate.decorators = Default.decorators;
SelectedDate.args = {
  datetime: DateTime.now().set({ month: 3, day: 17 }),
} as unknown as Partial<NgxCalendarComponent>;
