import styled, { css, DefaultTheme } from 'styled-components';
import { Title } from '../Heading/styles';

type MenuBehaviorProps = {
  menuVisible: boolean;
};

const wrapperChanger = (
  menuVisible: MenuBehaviorProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? '0' : '-30rem'};

  @media ${theme.media.medium} {
    left: ${menuVisible ? '0' : '-32rem'};
  }
`;

export const Wrapper = styled.div<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.large};
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: 0;
    overflow-y: auto;
    transition: all 300ms ease-in-out;
    ${wrapperChanger(menuVisible, theme)}

    &::-webkit-scrollbar {
      display: none;
    }
  `}
`;

export const Nav = styled.nav`
  margin: auto;
  width: 100%;
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    ${Title} {
      display: flex;
      justify-content: center;
      margin: ${theme.spacings.xlarge} 0;

      img {
        border: 0.3rem solid ${theme.colors.secondary};
      }
    }
  `}
`;

const buttonChanger = (
  menuVisible: MenuBehaviorProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? '26rem' : '1rem'};
  color: ${menuVisible ? theme.colors.secondary : theme.colors.white};

  @media ${theme.media.medium} {
    left: ${menuVisible ? '26rem' : '0'};
  }
`;

export const OpenClose = styled.a<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    left: 26rem;
    transition: all 300ms ease-in-out;
    ${buttonChanger(menuVisible, theme)}
  `}
`;
