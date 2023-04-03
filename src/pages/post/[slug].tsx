import { useRouter } from 'next/router';
import { StrapiPostsAnsSetting } from '..';
import PostTemplate from '../../templates/PostTemplate';
import { GetStaticPaths, GetStaticProps } from 'next';
import { loadPosts } from '../../api/load-posts';
import { mapData } from '../../api/mapData';
import Head from 'next/head';

const PostPage = ({ posts, setting }: StrapiPostsAnsSetting) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const post = posts[0];

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostTemplate post={posts[0]} settings={setting} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  let data: StrapiPostsAnsSetting | null = null;
  let paths = [];

  try {
    data = await loadPosts().then((response) => mapData(response));
    paths = data.posts.map((post) => ({
      params: { slug: post.slug },
    }));
  } catch (error) {
    console.log(error);
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    paths = [];
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostsAnsSetting> = async (
  ctx,
) => {
  let data = null;

  try {
    data = await loadPosts({ postSlug: ctx.params.slug as string }).then(
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

export default PostPage;
