import Header from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<Header />', () => {
  it('should render an image, a heading and text', () => {
    const { container } = renderTheme(
      <Header {...mock} showText={undefined} />,
    );
    expect(
      screen.getByRole('heading', { name: 'Evandro Calado' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /Evandro Calado/i }),
    ).toHaveAttribute('src', mock.logo);
    expect(container).toMatchSnapshot();
  });
});
