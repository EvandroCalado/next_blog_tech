import * as Styled from './styles';
import Heading from '../Heading';
import Link from 'next/link';

export type LogoLinkProps = {
  text: string;
  image?: string;
  link: string;
  newTab?: boolean;
};

const LogoLink = ({
  text,
  image = '',
  link,
  newTab = false,
}: LogoLinkProps) => {
  const isExternLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (isExternLink) {
    <Heading size="small" uppercase>
      <Link href={link} passHref>
        <Styled.Container target={target}>
          {image ? <img src={image} alt={text} /> : text}
        </Styled.Container>
      </Link>
    </Heading>;
  }

  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link} target={target}>
        {image ? <img src={image} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};

export default LogoLink;
