import Post, { PostProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

import mock from './mock';

export default {
  title: 'Post',
  component: Post,
  args: mock,
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta;

export const Template: Story<PostProps> = (args) => (
  <div>
    <Post {...args} />
  </div>
);
