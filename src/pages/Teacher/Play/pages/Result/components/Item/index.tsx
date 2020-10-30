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

const Item: React.FC<ItemProps> = ({ student, index }) => {
  function handleHasPlural(number: number) {
    return number >= -1 && number <= 1 ? '' : 's';
  }

  return (
    <ItemWrapper>
      <Number>{index + 1}º</Number>
      <IconUser />
      <Info>
        <Name>{student.nameStudent}</Name>
        <Scores>
          <Num>
            {student.points} ponto{handleHasPlural(student.points)}
          </Num>
          <Description>
            <Num>{student.correct}</Num> acerto
            {handleHasPlural(student.correct)}
          </Description>
          <Description>
            <Num>{student.error}</Num> erro{handleHasPlural(student.error)}
          </Description>
        </Scores>
      </Info>
    </ItemWrapper>
  );
};

export default Item;
