import { useRouter } from 'next/router';
import { StrapiPostsAnsSetting } from '..';
import { GetStaticPaths, GetStaticProps } from 'next';
import { defaultLoadPostVariables, loadPosts } from '../../api/load-posts';
import { mapData } from '../../api/mapData';
import Head from 'next/head';
import PostsTemplate from '../../templates/PostsTemplate';

const TagPage = ({ posts, setting, variables }: StrapiPostsAnsSetting) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const tagName = posts[0].tags.filter(
    (tag) => tag.slug === router.query.slug,
  )[0].displayName;

  return (
    <>
      <Head>
        <title>Tag: {tagName}</title>
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostsAnsSetting> = async (
  ctx,
) => {
  let data = null;
  const variables = { tagSlug: ctx.params.slug as string };

  try {
    data = await loadPosts(variables).then((response) => mapData(response));
  } catch (error) {
    console.log(error);
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: {
        ...defaultLoadPostVariables,
        ...variables,
      },
    },
    revalidate: 600,
  };
};

export default TagPage;
