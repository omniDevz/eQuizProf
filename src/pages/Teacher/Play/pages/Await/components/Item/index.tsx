import React from 'react';

import { ItemWrapper, IconUser, Trash, Name } from './styled';

import { ItemProps } from './interface';

const Item: React.FC<ItemProps> = ({ name, removeStudent }) => {
  return (
    <ItemWrapper>
      <IconUser />
      <Name>{name}</Name>
      <Trash title="Remover aluno do quiz" onClick={removeStudent} />
    </ItemWrapper>
  );
};

export default Item;
