import { PostProps } from '../Post';
import { Tags } from './tags';

export type PostStrapi = PostProps & {
  tags: Tags[];
  allowComments: boolean;
};
