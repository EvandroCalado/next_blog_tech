import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin: ${theme.spacings.xlarge} 0;
    padding: 0 ${theme.spacings.large};
    max-width: ${theme.sizes.full};
    width: 22.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    > svg.search-check,
    > svg.search-cancel {
      position: absolute;
      right: 1rem;
      width: 2.4rem;
      height: 2.4rem;
      margin-left: 1rem;
      color: ${theme.colors.darkerGray};
    }

    > svg.search-cancel {
      color: ${theme.colors.secondary};
    }
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    padding: 0.5rem ${theme.spacings.medium};
    outline: none;

    &:disabled {
      outline: 0.1rem solid ${theme.colors.secondary};
    }
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.sizes.full};
    width: 100%;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.large};
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
  `}
`;
