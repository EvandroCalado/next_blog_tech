import PostCard from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<PostCard />', () => {
  it('should render a heading, cover and excerpt', () => {
    renderTheme(<PostCard {...mock} />);
    expect(
      screen.getByRole('heading', { name: mock.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: mock.title })).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: mock.title })[0],
    ).toHaveAttribute('href', `/post/${mock.slug}`);
    expect(screen.getByText(mock.excerpt)).toBeInTheDocument();
  });

  it('should render match snapshot', () => {
    const { container } = renderTheme(<PostCard {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
