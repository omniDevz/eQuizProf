import React from 'react';

import Header from './components/Header';
import LinkItem from './components/LinkItem';

import { HeaderWrapper, Navigation, Menu, LinkList } from './styled';

const PageHeader: React.FC = () => {
  function handleToggleMenu() {
    const menu = document.getElementById('menu');
    menu?.classList.toggle('open');
  }

  return (
    <HeaderWrapper>
      <Menu id="menu">
        <Header
          isMenuIcon={false}
          title="Fechar Menu"
          onClick={handleToggleMenu}
        />

        <Navigation>
          <LinkList>
            <LinkItem to="/newRegister" title="Cadastrar" />
            <LinkItem to="/login" title="Entrar" />
          </LinkList>
        </Navigation>
      </Menu>
      <Header isMenuIcon={true} title="Abrir Menu" onClick={handleToggleMenu} />
    </HeaderWrapper>
  );
};

export default PageHeader;
