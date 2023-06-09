import { useContext, useEffect, useState } from 'react';
import { BlogThemeContext } from '../../contexts/BlogThemeContext';
import * as Styled from './styles';
import { LightMode, DarkMode } from '@styled-icons/material-outlined';

const ToggleTheme = () => {
  const { setTheme } = useContext(BlogThemeContext);
  const [cheked, setChecked] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);

    if (newTheme.name === 'inverted') {
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    setTheme(cheked ? 'inverted' : 'default');
  }, [cheked, setTheme]);

  const handleChange = () => {
    setChecked(!cheked);
    setTheme(cheked ? 'inverted' : 'default');
  };

  return (
    <Styled.Wrapper>
      <LightMode />
      <Styled.Label>
        Toggle light and dark modes
        <Styled.Input
          type="checkbox"
          value="Dark mode active"
          onChange={handleChange}
          checked={cheked}
          aria-label="Checkbox"
        />
        <Styled.Slider></Styled.Slider>
      </Styled.Label>
      <DarkMode />
    </Styled.Wrapper>
  );
};

export default ToggleTheme;
