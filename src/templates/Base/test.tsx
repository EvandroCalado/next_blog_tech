import Base from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<Base />', () => {
  it('should render elements', () => {
    renderTheme(<Base {...mock} />);

    expect(
      screen.getByRole('img', {
        name: 'Evandro Calado - Blog sobre alguma coisa',
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Open or close menu')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Evandro Calado' }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Base {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
