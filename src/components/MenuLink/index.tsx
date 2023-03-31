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
      <Link href={link} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

export default MenuLink;
