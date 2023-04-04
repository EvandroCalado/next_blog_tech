import Head from 'next/head';
import {
  defaultLoadPostVariables,
  loadPosts,
  LoadPostsVariables,
} from '../api/load-posts';
import { mapData } from '../api/mapData';
import { GetStaticProps } from 'next';
import { SettingsStrapi } from '../components/shared-types/settings-strapi';
import { PostStrapi } from '../components/shared-types/post-strapi';
import PostsTemplate from '../templates/PostsTemplate';

export type StrapiPostsAnsSetting = {
  setting: SettingsStrapi;
  posts: PostStrapi[];
  variables: LoadPostsVariables;
};

const Index = ({ posts, setting, variables }: StrapiPostsAnsSetting) => {
  return (
    <>
      <Head>
        <title>{setting.blogName}</title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
};

export const getStaticProps: GetStaticProps<
  StrapiPostsAnsSetting
> = async () => {
  let data = null;

  try {
    data = await loadPosts().then((response) => mapData(response));
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
      },
    },
    revalidate: 600,
  };
};

export default Index;
