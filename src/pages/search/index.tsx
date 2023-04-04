import { useRouter } from 'next/router';
import { StrapiPostsAnsSetting } from '..';
import { GetServerSideProps } from 'next';
import { defaultLoadPostVariables, loadPosts } from '../../api/load-posts';
import { mapData } from '../../api/mapData';
import Head from 'next/head';
import PostsTemplate from '../../templates/PostsTemplate';

const SearchPage = ({ posts, setting, variables }: StrapiPostsAnsSetting) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Pesquisa: {router.query.q}</title>
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  StrapiPostsAnsSetting
> = async (ctx) => {
  let data = null;
  const query = ctx.query.q || '';

  if (!query) {
    return {
      notFound: true,
    };
  }

  const variables = { postSearch: query as string };

  try {
    data = await loadPosts(variables).then((response) => mapData(response));
  } catch (error) {
    console.log(error);
    data = null;
  }

  if (!data || !data.posts) {
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
  };
};

export default SearchPage;
