import ToggleTheme from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<ToggleTheme />', () => {
  it('should render', () => {
    renderTheme(<ToggleTheme />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
