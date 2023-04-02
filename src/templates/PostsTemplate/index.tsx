import PostGrid from '../../components/PostGrid';
import { PostStrapi } from '../../components/shared-types/post-strapi';
import { SettingsStrapi } from '../../components/shared-types/settings-strapi';
import BaseTemplate from '../BaseTemplate';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
};
const PostsTemplate = ({ settings, posts = [] }: PostsTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={posts} />
    </BaseTemplate>
  );
};

export default PostsTemplate;
