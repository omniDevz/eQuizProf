import React from 'react';
import { FiTrello } from 'react-icons/fi';

import {
  DetailsResult,
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

const Item: React.FC<ItemProps> = ({ student, index, movQuizId }) => {
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
      <DetailsResult to={`/play/${movQuizId}/student/${student.studentId}`}>
        <FiTrello />
      </DetailsResult>
    </ItemWrapper>
  );
};

export default Item;
