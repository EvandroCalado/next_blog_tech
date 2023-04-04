import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    position: fixed;
    bottom: 3rem;
    right: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    z-index: 6;
    text-decoration: none;
    transition: all 300ms ease-in-out;

    &:hover {
      color: ${theme.colors.secondary};
    }
  `}
`;
