import React from 'react';

import { ButtonStyled } from './styled';

import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({ children, color, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} color={color} type="button">
      {children}
    </ButtonStyled>
  );
};

export default Button;
