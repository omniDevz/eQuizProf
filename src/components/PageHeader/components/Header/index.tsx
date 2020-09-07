import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

import logoImg from '../../../../assets/images/FavIcon.svg';

import { HeaderContainer, Logo, Button } from './styled';

import { HeaderProps } from './interface';

const Header: React.FC<HeaderProps> = ({ isMenuIcon, title, onClick }) => {
  return (
    <HeaderContainer>
      <Link to="/" title="Ir para Home">
        <Button>
          <Logo src={logoImg} alt="Logo English Quiz" />
        </Button>
      </Link>

      <Button title={title} onClick={onClick}>
        {isMenuIcon ? <FiMenu /> : <FiX />}
      </Button>
    </HeaderContainer>
  );
};

export default Header;
