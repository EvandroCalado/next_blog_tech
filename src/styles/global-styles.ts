import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: ${({ theme }) => theme.spacings.large} 0;
    font-weight: 800;
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
