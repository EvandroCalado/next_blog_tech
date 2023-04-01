import Link from 'next/link';
import { Tags } from '../shared-types/tags';
import * as Styled from './styles';

export type PostTagsProps = {
  tags?: Tags[];
};
const PostTags = ({ tags = [] }: PostTagsProps) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <Styled.Wrapper>
      Tags:{' '}
      {tags.map((tag) => (
        <span key={tag.id}>
          <Link href={`/tag/${tag.slug}`}>{tag.displayName}</Link>
        </span>
      ))}
    </Styled.Wrapper>
  );
};

export default PostTags;
