import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.darkerGray};
    font-style: italic;

    .categories span:not(:last-child)::after {
      content: ', ';
    }

    span:first-child {
      margin-right: 0.5rem;
    }

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;

      &:hover {
        filter: brightness(50%);
      }
    }
  `}
`;
