import React from 'react';

import Header from './components/Header';
import LinkItem from './components/LinkItem';

import { HeaderWrapper, Navigation, Menu, LinkList } from './styled';

import { HeaderProps } from './interface';

const PageHeader: React.FC<HeaderProps> = ({ type, teacherOn }) => {
  const howType = type === undefined ? 'icon' : type;
  const hasTeacherOn = Boolean(teacherOn);

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
          teacher={hasTeacherOn}
          type={hasTeacherOn ? 'exit' : 'icon'}
        />

        <Navigation>
          <LinkList>
            {hasTeacherOn ? (
              <>
                <LinkItem to="/teacher/home" title="Home" />
                <LinkItem to="/teacher/quizzes" title="Quizzes" />
                <LinkItem to="/teacher/books" title="Livros" />
                <LinkItem to="/teacher/live" title="Live" />
                <LinkItem to="/teacher/clan" title="Turmas" />
                <LinkItem to="/teacher/account" title="Perfil" />
              </>
            ) : (
              <>
                <LinkItem to="/newRegister" title="Cadastrar" />
                <LinkItem to="/login" title="Entrar" />
              </>
            )}
          </LinkList>
        </Navigation>
      </Menu>
      <Header
        isMenuIcon={true}
        title="Abrir Menu"
        onClick={handleToggleMenu}
        teacher={hasTeacherOn}
        type={howType}
      />
    </HeaderWrapper>
  );
};

export default PageHeader;
