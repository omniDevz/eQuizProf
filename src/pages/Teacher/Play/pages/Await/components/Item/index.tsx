import React from 'react';

import { ItemWrapper, IconUser, Name } from './styled';

import { ItemProps } from './interface';

const Item: React.FC<ItemProps> = ({ name }) => {
  return (
    <ItemWrapper>
      <IconUser />
      <Name>{name}</Name>
    </ItemWrapper>
  );
};

export default Item;
