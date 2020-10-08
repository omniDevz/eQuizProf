import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import PageTeacher from '../../../../../components/PageTeacher';
import Question from '../../components/Question';
import Slide from '../../components/Slide';

import api from '../../../../../services/api';

import {
  ButtonsWrapper,
  IconEdit,
  ListQuiz,
  Header,
  Name,
  Code,
} from './styled';

import { ParamsProps } from './interface';
import { IQuiz, IQuizApi } from '../../interface';

const QuizDetail: React.FC = () => {
  const [quiz, setQuiz] = useState<IQuiz>({} as IQuiz);

  const { quizId } = useParams<ParamsProps>();

  const { addToast } = useToasts();

  useEffect(() => {
    api
      .get(`/quiz/${quizId}`)
      .then(({ data }) => {
        const quizApi: IQuizApi = data;

        setQuiz({
          quizId: quizApi.quizId,
          name: quizApi.nome,
          description: quizApi.descricao,
          code: quizApi.codigo,
        });
      })
      .catch((err) => {
        console.error(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }, [quizId, addToast]);

  return (
    <PageTeacher type="back" text="Quiz">
      <Header>
        <Name>{quiz.name}</Name>
        <Code>#{quiz.code}</Code>
        <IconEdit />
      </Header>
      <ListQuiz>
        <Question />
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
