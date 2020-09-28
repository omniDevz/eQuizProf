import React from 'react';

import Button from '../../../../../components/Button';

import { ButtonsWrapper, ItemWrapper, NameQuiz } from './styled';

import { QuizItemProps } from './interface';

const Item: React.FC<QuizItemProps> = ({ name }) => {
  return (
    <ItemWrapper>
      <NameQuiz>{name}</NameQuiz>
      <ButtonsWrapper>
        <Button color="primary-outline">Iniciar por código</Button>
        <Button color="primary-outline">Iniciar por turma</Button>
      </ButtonsWrapper>
    </ItemWrapper>
  );
};

export default Item;
