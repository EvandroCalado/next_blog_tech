import * as Styled from './styles';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@styled-icons/material-outlined';
import LogoLink from '../LogoLink';
import MenuLink from '../MenuLink';
import { useState } from 'react';

export type MenuPropsLinks = {
  id: string;
  link: string;
  newTab?: boolean;
  text: string;
};

export type MenuProps = {
  links: MenuPropsLinks[];
  blogName: string;
  logo: string;
};
const Menu = ({ links = [], blogName, logo }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleOpenCloseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <Styled.OpenClose
        onClick={handleOpenCloseMenu}
        menuVisible={menuVisible}
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
      >
        {menuVisible && <CloseIcon aria-label="Close menu" />}
        {!menuVisible && <MenuIcon aria-label="Open menu" />}
      </Styled.OpenClose>

      <Styled.Wrapper menuVisible={menuVisible} aria-hidden={!menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink link="/" text={blogName} image={logo} />
          </Styled.Logo>
          {links.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};

export default Menu;
