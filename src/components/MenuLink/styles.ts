import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    a {
      display: block;
      color: ${theme.colors.white};
      text-decoration: none;
      margin-bottom: ${theme.spacings.small};
      font-size: 1.8rem;
      border-right: 0 solid ${theme.colors.primary};
      transition: all 300ms ease-in-out;

      &:hover {
        border-right: 0.5rem solid ${theme.colors.secondary};
        color: ${theme.colors.secondary};
      }
    }
  `}
`;
