import React from 'react';

import Button from '../../../../../components/Button';
import PageTeacher from '../../../../../components/PageTeacher';
import Question from '../../components/Question';
import Slide from '../../components/Slide';

import {
  ButtonsWrapper,
  IconEdit,
  ListQuiz,
  Header,
  Name,
  Code,
} from './styled';

const QuizDetail: React.FC = () => {
  return (
    <PageTeacher type="back" text="Quiz">
      <Header>
        <Name>Nome quiz</Name>
        <Code>#code</Code>
        <IconEdit />
      </Header>
      <ListQuiz>
        <Question />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </ListQuiz>
      <ButtonsWrapper>
        <Button color="primary-outline" to={`/teacher/quiz/${1}/slide/new`}>
          Novo slide
        </Button>
        <Button color="primary-outline" to={`/teacher/quiz/${1}/question/new`}>
          Nova quiz
        </Button>
      </ButtonsWrapper>
    </PageTeacher>
  );
};

export default QuizDetail;
