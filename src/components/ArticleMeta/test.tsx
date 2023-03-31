import ArticleMeta from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...mock} />);

    expect(
      screen.getByRole('link', { name: 'Evandro Calado' }),
    ).toHaveAttribute('href', '/author/evandro-calado');

    expect(screen.getByRole('link', { name: 'React' })).toHaveAttribute(
      'href',
      '/category/react',
    );

    expect(screen.getByRole('link', { name: 'Next' })).toHaveAttribute(
      'href',
      '/category/next',
    );
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta {...mock} />);

    expect(screen.getByText('27 de mar. de 2023')).toHaveAttribute(
      'datetime',
      mock.createdAt,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...mock} />);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot without author and categories', () => {
    const { container } = renderTheme(
      <ArticleMeta {...mock} author={undefined} categories={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
