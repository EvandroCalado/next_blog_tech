import * as Styled from './styles';
import Post from '../../components/Post';
import PostTags from '../../components/PostTags';
import { PostStrapi } from '../../components/shared-types/post-strapi';
import { SettingsStrapi } from '../../components/shared-types/settings-strapi';
import BaseTemplate from '../BaseTemplate';

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post?: PostStrapi;
};
const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />
      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>
    </BaseTemplate>
  );
};

export default PostTemplate;
