import Link from 'next/link';
import Heading from '../Heading';
import * as Styled from './styles';

export type PostCardProps = {
  id: string;
  title: string;
  slug: string;
  cover: string;
  excerpt: string;
};

const PostCard = ({ title, slug, cover, excerpt }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <Styled.Cover src={cover} alt={title} />
      </Link>
      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`}>{title}</Link>
      </Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};

export default PostCard;
