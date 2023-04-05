import PostTemplate, { PostTemplateProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

import mock from './mock';

export default {
  title: 'PostTemplate',
  component: PostTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: '',
    },
  },
} as Meta;

export const Template: Story<PostTemplateProps> = (args) => (
  <div>
    <PostTemplate {...args} />
  </div>
);
