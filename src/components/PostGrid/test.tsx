import PostGrid from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<PostGrid />', () => {
  it('should not render post', () => {
    renderTheme(<PostGrid posts={undefined} />);
    expect(screen.getByText(/Nenhum post/i)).toBeInTheDocument();
  });

  it('should render all posts', () => {
    const { container } = renderTheme(<PostGrid {...mock} />);

    expect(screen.queryByText(/Nenhum post/i)).not.toBeInTheDocument();

    expect(screen.getAllByRole('heading')).toHaveLength(3);
    expect(screen.getAllByRole('img')).toHaveLength(3);
    expect(container.querySelectorAll('p')).toHaveLength(3);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostGrid {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
