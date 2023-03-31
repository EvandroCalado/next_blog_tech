import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: 900;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: 900;
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 900;
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
    font-weight: 900;
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.medium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<HeadingProps>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primary : theme.colors.white};
    line-height: 1.2;
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
    text-align: center;
  `}
`;
