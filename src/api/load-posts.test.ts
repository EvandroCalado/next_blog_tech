import request from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERIES } from '../graphql/queries';
import {
  defaultLoadPostVariables,
  loadPosts,
  LoadPostsVariables,
} from './load-posts';

jest.mock('graphql-request');

jest.mock('../graphql/queries', () => {
  return {
    GRAPHQL_QUERIES: 'A_QUERY',
  };
});

describe('load-posts', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call request with default variables if none are provided', async () => {
    const expectedData = { posts: [] };
    (request as jest.Mock).mockImplementation(() => expectedData);

    const data = await loadPosts();

    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      GRAPHQL_QUERIES,
      defaultLoadPostVariables,
    );
    expect(data).toEqual(expectedData);
  });

  it('should call request with provided variables', async () => {
    const expectedData = { posts: [] };
    (request as jest.Mock).mockImplementation(() => expectedData);

    const variables: LoadPostsVariables = {
      categorySlug: 'news',
      tagSlug: 'featured',
      limit: 10,
    };

    const data = await loadPosts(variables);

    expect(request).toHaveBeenCalledWith(config.graphqlURL, GRAPHQL_QUERIES, {
      ...defaultLoadPostVariables,
      ...variables,
    });
    expect(data).toEqual(expectedData);
  });
});
