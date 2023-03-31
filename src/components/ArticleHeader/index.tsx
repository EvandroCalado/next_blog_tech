import { Author } from '../shared-types/author';
import Heading from '../Heading';
import * as Styled from './styles';
import { Category } from '../shared-types/categories';
import ArticleMeta from '../ArticleMeta';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
  author: Author;
  categories: Category[];
  createdAt: string;
};
const ArticleHeader = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <Heading as="h1" size="huge">
        {title}
      </Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover src={cover} alt={title} />
      <ArticleMeta
        categories={categories}
        author={author}
        createdAt={createdAt}
      />
    </Styled.Wrapper>
  );
};

export default ArticleHeader;
