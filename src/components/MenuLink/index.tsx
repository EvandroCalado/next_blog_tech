import Link from 'next/link';
import * as Styled from './styles';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
  const isExternLink = !link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (isExternLink) {
    return (
      <Styled.Container>
        <Link href={link} target={target}>
          {children}
        </Link>
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      <Link href={link} target={target}>
        {children}
      </Link>
    </Styled.Container>
  );
};

export default MenuLink;
