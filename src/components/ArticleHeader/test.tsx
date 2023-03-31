import ArticleHeader from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';
import { formatDate } from '../utils/format-date';

describe('<ArticleHeader />', () => {
  it('should render heading, excerpt, cover, img and meta', () => {
    const { container } = renderTheme(<ArticleHeader {...mock} />);
    expect(
      screen.getByRole('heading', { name: mock.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: mock.title })).toBeInTheDocument();
    expect(screen.getByText(mock.excerpt)).toBeInTheDocument();
    expect(screen.getByText(formatDate(mock.createdAt))).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
