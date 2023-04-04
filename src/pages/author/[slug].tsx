import { useRouter } from 'next/router';
import { StrapiPostsAnsSetting } from '..';
import { GetStaticPaths, GetStaticProps } from 'next';
import { loadPosts } from '../../api/load-posts';
import { mapData } from '../../api/mapData';
import Head from 'next/head';
import PostsTemplate from '../../templates/PostsTemplate';

const AuthorPage = ({ posts, setting }: StrapiPostsAnsSetting) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>Author: {posts[0].author.displayName}</title>
      </Head>
      <PostsTemplate posts={posts} settings={setting} />
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

  try {
    data = await loadPosts({ authorSlug: ctx.params.slug as string }).then(
      (response) => mapData(response),
    );
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
    },
    revalidate: 600,
  };
};

export default AuthorPage;
