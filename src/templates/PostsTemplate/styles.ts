import styled, { css } from 'styled-components';

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    margin: ${theme.spacings.large} 0;
    display: flex;
    justify-content: center;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    padding: ${theme.spacings.small} ${theme.spacings.large};
    font-size: ${theme.font.sizes.small};
    transition: all 300ms ease-in-out;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.secondary};
    }

    &:disabled {
      background-color: ${theme.colors.darkerGray};
    }
  `}
`;
