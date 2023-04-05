import { DefaultTheme, ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { createContext, useEffect, useState } from 'react';

export type BlogThemeProviderProps = {
  children: React.ReactNode;
};

export type BlogThemeContextValues = {
  theme: DefaultTheme;
  setTheme?: (mode: 'default' | 'inverted') => void;
};

export const BlogThemeContext = createContext<BlogThemeContextValues>({
  theme,
});

export const BlogThemeProvider = ({ children }: BlogThemeProviderProps) => {
  const [blogTheme, setBlogTheme] = useState(theme);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);
    setBlogTheme(newTheme);
  }, []);

  const handleSetTheme: BlogThemeContextValues['setTheme'] = (
    mode = 'default',
  ) => {
    if (mode === 'default') {
      setBlogTheme(theme);
      localStorage.setItem('theme', JSON.stringify(theme));
    } else {
      const newTheme = {
        ...theme,
        name: 'inverted',
        colors: {
          primary: '#fff',
          secondary: '#dc143c',
          codeBackground: '#161B22',
          codeFontColor: '#C9D1D9',
          dark: '#f9f9f9',
          white: '#000',
          mediumGray: '#f9f9f9',
          darkerGray: '#ccc',
        },
      };
      setBlogTheme(newTheme);
      localStorage.setItem('theme', JSON.stringify(newTheme));
    }
  };

  return (
    <BlogThemeContext.Provider
      value={{ theme: blogTheme, setTheme: handleSetTheme }}
    >
      <ThemeProvider theme={blogTheme}>{children}</ThemeProvider>
    </BlogThemeContext.Provider>
  );
};

// @styled-icons/material-outlined/LightMode
// @styled-icons/material-outlined/DarkMode
