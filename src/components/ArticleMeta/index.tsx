import { Author } from '../shared-types/author';
import { Category } from '../shared-types/categories';
import { formatDate } from '../utils/format-date';
import * as Styled from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  author?: Author;
  categories?: Category[];
};
const ArticleMeta = ({
  createdAt,
  author = undefined,
  categories = [],
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        {typeof author !== 'undefined' && (
          <>
            <span>Por</span>
            <a href={`/author/${author.slug}`}>{author.displayName}</a>
            <span className="separator"> | </span>
          </>
        )}
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        {categories.length > 0 && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              {categories.map((category, index) => {
                return (
                  <span key={`article-meta-cat${index}`}>
                    <a href={`/category/${category.attributes.slug}`}>
                      {category.attributes.displayName}
                    </a>
                  </span>
                );
              })}
            </span>
          </>
        )}
      </p>
    </Styled.Wrapper>
  );
};

export default ArticleMeta;
