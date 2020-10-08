import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Button from '../../../../../components/Button';

import {
  DescriptionQuiz,
  ButtonsWrapper,
  ItemWrapper,
  HeaderItem,
  NameQuiz,
  Infos,
} from './styled';

import { IQuizItem } from './interface';

const Item: React.FC<IQuizItem> = ({ quizId, name, description }) => {
  return (
    <ItemWrapper>
      <HeaderItem>
        <Infos>
          <NameQuiz>{name}</NameQuiz>
          <DescriptionQuiz>{description}</DescriptionQuiz>
        </Infos>
        <Link to={`/quiz/${quizId}`} title="Planeje seu quiz">
          <FiEdit />
        </Link>
      </HeaderItem>
      <ButtonsWrapper>
        <Button color="primary-outline">Iniciar por código</Button>
        <Button color="primary-outline">Iniciar por turma</Button>
      </ButtonsWrapper>
    </ItemWrapper>
  );
};

export default Item;
