import PostGrid, { PostGridProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

import mock from './mock';

export default {
  title: 'PostGrid',
  component: PostGrid,
  args: mock,
} as Meta;

export const Template: Story<PostGridProps> = (args) => (
  <div>
    <PostGrid {...args} />
  </div>
);

export const NoPosts: Story<PostGridProps> = () => (
  <div>
    <PostGrid />
  </div>
);
