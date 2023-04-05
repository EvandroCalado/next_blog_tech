import Heading from '../Heading';
import LogoLink from '../LogoLink';
import * as Styled from './styles';

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: string;
  showText?: boolean;
};
const Header = ({
  blogName,
  blogDescription,
  logo,
  showText = true,
}: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink
        link="/"
        text={`${blogName} - ${blogDescription}`}
        image={logo}
        newTab={false}
      />

      {showText && (
        <Styled.Container>
          <Heading as="h2" size="small" colorDark={true}>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Styled.Container>
      )}
    </Styled.Wrapper>
  );
};

export default Header;
