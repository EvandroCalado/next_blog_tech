import { request } from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERIES } from '../graphql/queries';

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export const defaultLoadPostVariables: LoadPostsVariables = {
  sort: 'createdAt:desc',
  start: 0,
  limit: 3,
};

export const loadPosts = async (variables: LoadPostsVariables = {}) => {
  const data = await request(config.graphqlURL, GRAPHQL_QUERIES, {
    ...defaultLoadPostVariables,
    ...variables,
  });

  return data;
};
