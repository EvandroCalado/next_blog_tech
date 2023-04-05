import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

const GoTop = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Styled.Container
      onClick={handleClick}
      aria-label="Go to top"
      title="Go to top"
    >
      <KeyboardArrowUp />
    </Styled.Container>
  );
};

export default GoTop;
