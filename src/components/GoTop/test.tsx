import GoTop from '.';
import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

beforeEach(() => {
  Object.defineProperty(window, 'scrollTo', {
    value: jest.fn(),
    writable: true,
  });
});

describe('<GoTop />', () => {
  it('should scroll to top when clicked', () => {
    const { container } = renderTheme(<GoTop />);
    const button = screen.getByLabelText('Go to top');
    const scrollToSpy = jest.spyOn(window, 'scrollTo');
    fireEvent.click(button);
    expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
    expect(container).toMatchSnapshot();
  });
});
