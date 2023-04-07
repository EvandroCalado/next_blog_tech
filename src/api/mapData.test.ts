import { mapData } from './mapData';

describe('mapData', () => {
  it('should map response data to the correct shape', () => {
    const response = {
      setting: {
        data: {
          attributes: {
            blogName: 'My Blog',
            blogDescription: 'A blog about testing',
            footer: 'Copyright © 2023',
            logo: {
              data: {
                attributes: {
                  url: 'https://example.com/logo.png',
                },
              },
            },
            menuLink: 'https://example.com',
          },
        },
      },
      posts: {
        data: [
          {
            id: '1',
            attributes: {
              allowComments: true,
              content: 'Lorem ipsum dolor sit amet',
              createdAt: '2023-04-01T12:00:00Z',
              excerpt: 'Lorem ipsum dolor sit amet',
              slug: 'lorem-ipsum',
              title: 'Lorem ipsum',
              author: {
                data: {
                  attributes: {
                    name: 'John Doe',
                    avatar: {
                      data: {
                        attributes: {
                          url: 'https://example.com/avatar.png',
                        },
                      },
                    },
                  },
                },
              },
              cover: {
                data: {
                  attributes: {
                    url: 'https://example.com/cover.png',
                  },
                },
              },
              categories: {
                data: [
                  {
                    attributes: {
                      displayName: 'Testing',
                      slug: 'testing',
                    },
                  },
                ],
              },
              tags: {
                data: [
                  {
                    attributes: {
                      displayName: 'Jest',
                      slug: 'jest',
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    };

    const expectedData = {
      setting: {
        blogName: 'My Blog',
        blogDescription: 'A blog about testing',
        footer: 'Copyright © 2023',
        logo: 'https://example.com/logo.png',
        menuLink: 'https://example.com',
      },

      posts: [
        {
          id: '1',
          allowComments: true,
          content: 'Lorem ipsum dolor sit amet',
          createdAt: '2023-04-01T12:00:00Z',
          excerpt: 'Lorem ipsum dolor sit amet',
          slug: 'lorem-ipsum',
          title: 'Lorem ipsum',
          author: {
            name: 'John Doe',
            avatar: {
              data: {
                attributes: {
                  url: 'https://example.com/avatar.png',
                },
              },
            },
          },
          cover: 'https://example.com/cover.png',
          categories: [
            {
              displayName: 'Testing',
              slug: 'testing',
            },
          ],

          tags: [
            {
              displayName: 'Jest',
              slug: 'jest',
            },
          ],
        },
      ],
    };

    const data = mapData(response);

    expect(data).toEqual(expectedData);
  });
});
