import PostsTemplate, { PostsTemplateProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

import mock from './mock';

export default {
  title: 'PostsTemplate',
  component: PostsTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: '',
    },
  },
} as Meta;

export const Template: Story<PostsTemplateProps> = (args) => (
  <div>
    <PostsTemplate {...args} />
  </div>
);
