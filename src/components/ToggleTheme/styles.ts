import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  right: 5rem;
  top: 3.1rem;
  z-index: 2;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2.7rem;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  color: transparent;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    display: none;

    &:checked + ${Slider} {
      background-color: ${theme.colors.secondary};
    }

    &:checked + ${Slider}::before {
      transform: translateX(2.5rem);
    }
  `}
`;

export const Slider = styled.span`
  ${({ theme }) => css`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid ${theme.colors.primary};
    background-color: ${theme.colors.darkerGray};
    transition: all 300ms ease-in-out;

    &::before {
      content: '';
      position: absolute;
      height: 2.1rem;
      width: 2.1rem;
      left: 0.2rem;
      bottom: 0.2rem;
      background-color: ${theme.colors.white};
      transition: all 300ms ease-in-out;
    }
  `}
`;
