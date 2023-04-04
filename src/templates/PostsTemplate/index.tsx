import * as Styled from './styles';
import PostGrid from '../../components/PostGrid';
import { PostStrapi } from '../../components/shared-types/post-strapi';
import { SettingsStrapi } from '../../components/shared-types/settings-strapi';
import BaseTemplate from '../BaseTemplate';
import { useState } from 'react';
import { loadPosts, LoadPostsVariables } from '../../api/load-posts';
import { mapData } from '../../api/mapData';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
  variables?: LoadPostsVariables;
};

const PostsTemplate = ({
  settings,
  posts = [],
  variables,
}: PostsTemplateProps) => {
  const [postsState, setPostsState] = useState(posts);
  const [variablesState, setVariablesState] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const handleLoadMorePosts = async () => {
    setButtonDisabled(true);
    const newVariables = {
      ...variablesState,
      start: variablesState.start + variablesState.limit,
      limit: variablesState.limit,
    };

    const morePosts = await loadPosts(newVariables).then((response) =>
      mapData(response),
    );

    if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
      setNoMorePosts(true);
      return;
    }

    setButtonDisabled(false);
    setVariablesState(newVariables);
    setPostsState((posts) => [...posts, ...morePosts.posts]);
  };

  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={postsState} />

      {postsState && postsState.length ? (
        <Styled.ButtonContainer>
          <Styled.Button
            onClick={handleLoadMorePosts}
            disabled={buttonDisabled}
          >
            {noMorePosts ? 'Sem mais posts' : 'Carregar mais'}
          </Styled.Button>
        </Styled.ButtonContainer>
      ) : null}
    </BaseTemplate>
  );
};

export default PostsTemplate;
