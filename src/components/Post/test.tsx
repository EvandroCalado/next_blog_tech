import Post from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';
import { formatDate } from '../utils/format-date';

describe('<Post />', () => {
  it('should render header, excerpt, cover, metadata and post', () => {
    const { container } = renderTheme(<Post {...mock} />);
    expect(
      screen.getByRole('heading', { name: mock.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: mock.slug })).toBeInTheDocument();
    expect(screen.getByText(formatDate(mock.createdAt))).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
