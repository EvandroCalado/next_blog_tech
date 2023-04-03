export const mapData = (response) => {
  const setting = {
    blogName: response.setting.data.attributes.blogName,
    blogDescription: response.setting.data.attributes.blogDescription,
    footer: response.setting.data.attributes.footer,
    logo: response.setting.data.attributes.logo.data.attributes.url,
    menuLink: response.setting.data.attributes.menuLink,
  };

  const posts = response.posts.data.map((post) => {
    return {
      id: post.id,
      allowComments: post.attributes.allowComments,
      content: post.attributes.content,
      createdAt: post.attributes.createdAt,
      excerpt: post.attributes.excerpt,
      slug: post.attributes.slug,
      title: post.attributes.title,
      author: post.attributes.author.data.attributes,
      cover: post.attributes.cover.data.attributes.url,
      categories: post.attributes.categories.data.map((category) => {
        return {
          displayName: category.attributes.displayName,
          slug: category.attributes.slug,
        };
      }),
      tags: post.attributes.tags.data.map((tag) => {
        return {
          displayName: tag.attributes.displayName,
          slug: tag.attributes.slug,
        };
      }),
    };
  });

  return {
    posts,
    setting,
  };
};
