import React from 'react';

import {
  ItemWrapper,
  Description,
  IconUser,
  Number,
  Scores,
  Name,
  Info,
  Num,
} from './styled';

import { ItemProps } from './interface';

const Item: React.FC<ItemProps> = ({ name }) => {
  return (
    <ItemWrapper>
      <Number>1º</Number>
      <IconUser />
      <Info>
        <Name>{name}</Name>
        <Scores>
          <Num>1,487</Num>
          <Description>
            <Num>8</Num> acertos
          </Description>
          <Description>
            <Num>4</Num> erros
          </Description>
        </Scores>
      </Info>
    </ItemWrapper>
  );
};

export default Item;
