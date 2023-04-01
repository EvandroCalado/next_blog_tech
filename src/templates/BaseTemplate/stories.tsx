import BaseTemplate, { BaseTemplateProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

import mock from './mock';

export default {
  title: 'Base',
  component: BaseTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Template: Story<BaseTemplateProps> = (args) => (
  <div>
    <BaseTemplate {...args} />
  </div>
);
