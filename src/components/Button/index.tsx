import React from 'react';

import { ButtonStyled } from './styled';

import { ButtonProps } from './interface';
import { Link } from 'react-router-dom';

const Button: React.FC<ButtonProps> = ({
  to,
  title,
  children,
  color,
  onClick,
}) => {
  const isLink = Boolean(to?.length);
  const href = to || '';

  return (
    <ButtonStyled onClick={onClick} color={color} type="button">
      {isLink ? (
        <Link to={href} title={title}>
          {children}
        </Link>
      ) : (
        children
      )}
    </ButtonStyled>
  );
};

export default Button;
