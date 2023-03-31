import styled, { css, DefaultTheme } from 'styled-components';

export type PostContainerProps = {
  size: 'full' | 'max' | 'content';
};

const postContainerStyles = {
  full: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.full};
  `,
  content: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.content};
  `,
};

export const PostContainer = styled.div<PostContainerProps>`
  ${({ theme, size }) => css`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.spacings.large};

    ${postContainerStyles[size](theme)}

    @media ${theme.media.medium} {
      padding: ${theme.spacings.small};
    }
  `}
`;
