import Base, { BaseProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

import mock from './mock';

export default {
  title: 'Base',
  component: Base,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Template: Story<BaseProps> = (args) => (
  <div>
    <Base {...args} />
  </div>
);
