import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { SettingsStrapi } from '../../components/shared-types/settings-strapi';
import * as Styled from './styles';

export type BaseProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};
const Base = ({ settings, children }: BaseProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        links={settings.menuLink}
        blogName={settings.blogName}
        logo={settings.logo}
      />

      <Styled.HeaderContainer>
        <Header
          blogName={settings.blogName}
          blogDescription={settings.blogDescription}
          logo={settings.logo}
        />
      </Styled.HeaderContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.footer} />
      </Styled.FooterContainer>
    </Styled.Wrapper>
  );
};

export default Base;
