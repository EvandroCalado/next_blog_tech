import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: ${theme.spacings.xhuge};
    width: 100%;
    max-width: ${theme.sizes.max};
    color: ${theme.colors.dark};
    font-size: ${theme.font.sizes.small};
    margin: 0 auto;

    ${Title} {
      margin: ${theme.spacings.small} 0;
      text-align: left;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    margin-left: ${theme.spacings.large};
    max-width: 48rem;
  `}
`;
