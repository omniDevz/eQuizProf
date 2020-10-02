import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Header from './components/Header';
import LinkItem from './components/LinkItem';

import { HeaderWrapper, Navigation, Menu, LinkList } from './styled';

import { HeaderProps } from './interface';

const links = [
  {
    route: 'newRegister',
    title: 'Cadastrar',
    logout: true,
  },
  {
    route: 'login',
    title: 'Entrar',
    logout: true,
  },
  {
    route: '',
    title: 'Home',
  },
  {
    route: 'quiz',
    title: 'Quizzes',
  },
  {
    route: 'book',
    title: 'Livros',
  },
  {
    route: 'author',
    title: 'Autores',
  },
  {
    route: 'live',
    title: 'Live',
  },
  {
    route: 'classes',
    title: 'Turmas',
  },
  {
    route: 'account',
    title: 'Perfil',
  },
];

const PageHeader: React.FC<HeaderProps> = ({ type, teacherOn, text }) => {
  const howType = type === undefined ? 'icon' : type;
  const hasTeacherOn = Boolean(teacherOn);
  const { url } = useRouteMatch();
  const routeActive = url.replace('/teacher/', '');

  function isHomePage(path: string): boolean {
    const isPageHome = path === 'home' && routeActive === '';

    return isPageHome;
  }

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
            {links
              .filter(
                ({ route, logout }) =>
                  route !== routeActive &&
                  Boolean(logout) === !hasTeacherOn &&
                  !isHomePage(route)
              )
              .map((link) => {
                const logged = Boolean(link?.logout) ? '' : '/teacher';
                return (
                  <LinkItem
                    key={link.route}
                    to={`${logged}/${link.route}`}
                    title={link.title}
                  />
                );
              })}
          </LinkList>
        </Navigation>
      </Menu>
      <Header
        isMenuIcon={true}
        title="Abrir Menu"
        onClick={handleToggleMenu}
        teacher={hasTeacherOn}
        type={howType}
        text={text}
      />
    </HeaderWrapper>
  );
};

export default PageHeader;
