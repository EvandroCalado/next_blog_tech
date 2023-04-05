import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.large};
    max-width: ${theme.sizes.full};
    width: 1000%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 3rem;
    right: 0.1rem;

    > svg {
      width: 2rem;
      position: relative;
      right: 2.6rem;
      transition: all 300ms ease-in-out;
    }
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    padding: 0.5rem ${theme.spacings.small};
    margin-left: auto;
    border: 1px solid ${theme.colors.primary};
    outline: none;
    width: 0;
    position: relative;
    z-index: 2;
    background: transparent;
    transition: all 300ms ease-in-out;

    &:focus {
      border: 1px solid ${theme.colors.primary};
      padding: 0.5rem ${theme.spacings.large};

      outline: none;
      width: 20rem;

      ~ svg {
        right: 19.2rem;
      }
    }
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.full};
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xhuge};
  `}
`;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xhuge};
    padding: 0 ${theme.spacings.large};
  `}
`;

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.full};
    width: 100%;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;
