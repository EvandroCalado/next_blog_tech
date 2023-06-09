import ArticleMeta, { ArticleMetaProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

import mock from './mock';

export default {
  title: 'ArticleMeta',
  component: ArticleMeta,
  args: { ...mock },
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta;

export const Template: Story<ArticleMetaProps> = (args) => (
  <div>
    <ArticleMeta {...args} />
  </div>
);

export const NoAuthor: Story<ArticleMetaProps> = (args) => (
  <div>
    <ArticleMeta {...args} author={undefined} />
  </div>
);

export const NoCategories: Story<ArticleMetaProps> = (args) => (
  <div>
    <ArticleMeta {...args} categories={undefined} />
  </div>
);

export const NoCategoriesAndAuthor: Story<ArticleMetaProps> = (args) => (
  <div>
    <ArticleMeta {...args} author={undefined} categories={undefined} />
  </div>
);
