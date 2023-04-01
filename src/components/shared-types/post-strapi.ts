import { PostProps } from '../Post';
import { PostTagsProps } from '../PostTags';

export type PostStrapi = PostProps & {
  tags: PostTagsProps;
  slug: string;
};
