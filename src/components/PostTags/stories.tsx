import PostTags, { PostTagsProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

import mock from './mock';

export default {
  title: 'PostTags',
  component: PostTags,
  args: mock,
} as Meta;

export const Template: Story<PostTagsProps> = (args) => (
  <div>
    <PostTags {...args} />
  </div>
);

export const NoTags: Story<PostTagsProps> = (args) => (
  <div>
    <PostTags {...args} tags={undefined} />
  </div>
);
