import PostTags from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<PostTags />', () => {
  it('should render tags ', () => {
    renderTheme(<PostTags {...mock} />);
    expect(screen.getByText(/Tags:/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostTags {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render match snapshot with no tags', () => {
    const { container } = renderTheme(<PostTags {...mock} tags={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
