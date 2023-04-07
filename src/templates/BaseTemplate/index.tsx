import Footer from '../../components/Footer';
import GoTop from '../../components/GoTop';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { SettingsStrapi } from '../../components/shared-types/settings-strapi';
import * as Styled from './styles';
import ToggleTheme from '../../components/ToggleTheme';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Cancel, CheckCircleOutline } from '@styled-icons/material-outlined';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};
const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query?.q || '');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeout = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeout.current);

    if (router?.query?.q === searchValue) return;

    const q = searchValue;

    if (!q || q.length < 3) return;

    inputTimeout.current = setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: '/search/',
          query: { q: searchValue },
        })
        .then(() => setIsReady(true));
    }, 600);

    return () => clearTimeout(inputTimeout.current);
  }, [searchValue, router]);

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

      <Styled.SearchContainer>
        <Styled.SearchInput
          type="search"
          placeholder="Busca..."
          name="q"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={searchDisabled}
        />
        {searchDisabled ? (
          <Cancel className="search-cancel" aria-label="Input Disabled" />
        ) : (
          <CheckCircleOutline
            className="search-check"
            aria-label="Input enabled"
          />
        )}
      </Styled.SearchContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.footer} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Wrapper>
  );
};

export default BaseTemplate;
