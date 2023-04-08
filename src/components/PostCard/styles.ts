import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${Title} {
      margin: ${theme.spacings.small} 0;
    }
    a {
      text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;
    }

    &:hover a {
      color: ${theme.colors.secondary};
    }

    &:hover img {
      opacity: 0.8;
    }
  `}
`;

export const Cover = styled.img`
  max-width: 100%;
  aspect-ratio: 16/9;
  transition: opacity 300ms ease-in-out;
`;

export const Excerpt = styled.p``;
