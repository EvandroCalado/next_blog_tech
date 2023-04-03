export const theme = {
  colors: {
    primary: '#2a3840',
    secondary: '#f24b4b',
    codeBackground: '#161B22',
    codeFontColor: '#C9D1D9',
    dark: '#333',
    white: '#f2f2f2',
    mediumGray: '#ddd',
    darkerGray: '#aaa',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
    },
    sizes: {
      xsmall: '0.8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    medium: '(max-width: 768px)',
    small: '(max-width: 360px)',
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
  sizes: {
    full: '120rem',
    max: '96rem',
    content: '80rem',
  },
} as const;
