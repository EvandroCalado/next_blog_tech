import Footer from '../../components/Footer';
import GoTop from '../../components/GoTop';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { SettingsStrapi } from '../../components/shared-types/settings-strapi';
import { Search } from '@styled-icons/material-outlined';
import * as Styled from './styles';
import ToggleTheme from '../../components/ToggleTheme';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};
const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <ToggleTheme />
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

      <form action="/search/" method="GET">
        <Styled.SearchContainer>
          <Styled.SearchInput type="search" placeholder="Busca..." name="q" />
          <Search />
        </Styled.SearchContainer>
      </form>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.footer} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
};

export default BaseTemplate;
