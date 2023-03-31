import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    border-radius: 50%;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    z-index: 6;
    text-decoration: none;
  `}
`;
