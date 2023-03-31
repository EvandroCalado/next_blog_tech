import Menu from '.';
import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<Menu />', () => {
  it('should render button link', () => {
    renderTheme(<Menu {...mock} links={undefined} />);

    const buttonLink = screen.getByRole('link', { name: 'Open or close menu' });
    const openMenuIcon = screen.getByLabelText('Open menu');

    expect(buttonLink).toBeInTheDocument();
    expect(openMenuIcon).toBeInTheDocument();

    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('should open/close menu on button click', () => {
    renderTheme(<Menu {...mock} />);

    const buttonLink = screen.getByRole('link', { name: 'Open or close menu' });
    fireEvent.click(buttonLink);

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(
      screen.getByRole('navigation').querySelectorAll('a:not([href="/"])'),
    ).toHaveLength(mock.links.length);
    expect(screen.getByRole('heading', { name: 'Evandro Calado' }));
    expect(screen.getByRole('img', { name: 'Evandro Calado' }));

    fireEvent.click(buttonLink);

    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
