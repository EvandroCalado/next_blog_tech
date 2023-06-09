import PostCard, { PostCardProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

import mock from './mock';

export default {
  title: 'PostCard',
  component: PostCard,
  args: mock,
} as Meta;

export const Template: Story<PostCardProps> = (args) => (
  <div style={{ maxWidth: '32rem' }}>
    <PostCard {...args} />
  </div>
);
