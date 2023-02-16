import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NgxCalendarComponent, NgxCalendarModule } from 'ngx-calendar';

export default {
  title: 'Example/Calendar',
  component: NgxCalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [NgxCalendarModule],
    }),
  ],
} as Meta;

const Template: Story<NgxCalendarComponent> = (args: NgxCalendarComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {} as Partial<NgxCalendarComponent>;
