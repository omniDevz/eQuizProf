import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import PageTeacher from '../../../../../components/PageTeacher';
import Question from '../../components/Question';
import Slide from '../../components/Slide';

import api from '../../../../../services/api';

import { ButtonsWrapper, IconEdit, ListQuiz, Header, Name } from './styled';

import { IQuizById, IQuizByIdFromApi, ParamsProps } from './interface';
import { IQuiz, IQuizApi } from '../../interface';
import {
  IAlternativeQuiz,
  IAlternativeQuizFromApi,
} from '../../components/Question/interface';
import { FiPlus } from 'react-icons/fi';

const QuizDetail: React.FC = () => {
  const [quiz, setQuiz] = useState<IQuiz>({} as IQuiz);
  const [listQuiz, setListQuiz] = useState<IQuizById[]>([]);

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

  useEffect(() => {
    api
      .get(`/MovQuizSlidePergunta/quizId/${quizId}`)
      .then(({ data }) => {
        const questionSlidesFromApi: IQuizById[] = data.map(
          (quiz: IQuizByIdFromApi) => {
            const quizFromApi: IQuizById = {
              orderByQuiz: quiz.ordenacaoObjetoQuiz,
              count: quiz.quantidadeTotalObjetos,
              questionQuiz: !!quiz.perguntaQuiz
                ? {
                    alternativeQuiz: quiz.perguntaQuiz?.alternativaQuiz.map(
                      (alternativeFromApi: IAlternativeQuizFromApi) => {
                        const alternative: IAlternativeQuiz = {
                          alternativeQuizId:
                            alternativeFromApi.alternativaQuizId,
                          letterAlternative:
                            alternativeFromApi.letraAlternativa,
                          questionQuizId: alternativeFromApi.perguntaQuizId,
                          text: alternativeFromApi.enunciado,
                        };

                        return alternative;
                      }
                    ),
                    letterAlternativeCorrect:
                      quiz.perguntaQuiz.alternativaCorreta,
                    numberQuestion: quiz.perguntaQuiz.numeroPergunta,
                    orderByQuiz: quiz.perguntaQuiz.ordenacaoObjetoQuiz,
                    questionQuizId: quiz.perguntaQuiz.perguntaQuizId,
                    quizId: quiz.perguntaQuiz.quizId,
                    text: quiz.perguntaQuiz.enunciado,
                    timeSeconds: quiz.perguntaQuiz.tempoSegundos,
                    count: quiz.quantidadeTotalObjetos,
                  }
                : null,
              slideQuiz: !!quiz.slideQuiz
                ? {
                    numberSlide: quiz.slideQuiz.numeroSlide,
                    slideQuizId: quiz.slideQuiz.slideQuizId,
                    orderByQuiz: quiz.ordenacaoObjetoQuiz,
                    quizId: quiz.slideQuiz.quizId,
                    content: quiz.slideQuiz.conteudoSlide,
                    count: quiz.quantidadeTotalObjetos,
                  }
                : null,
            };

            return quizFromApi;
          }
        );

        setListQuiz(questionSlidesFromApi);
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
        <IconEdit />
      </Header>
      <ListQuiz>
        {listQuiz.length > 0 &&
          listQuiz
            .filter((quiz) => !!quiz.slideQuiz || !!quiz.questionQuiz)
            .map((quiz) =>
              !!quiz.slideQuiz ? (
                <Slide key={quiz.orderByQuiz} slide={quiz.slideQuiz} />
              ) : (
                <Question key={quiz.orderByQuiz} question={quiz.questionQuiz} />
              )
            )}
      </ListQuiz>
      <ButtonsWrapper>
        <Button color="primary-outline" to={`/quiz/${1}/slide/new`}>
          <FiPlus /> Slide
        </Button>
        <Button color="primary-outline" to={`/quiz/${1}/question/new`}>
          <FiPlus /> Pergunta
        </Button>
      </ButtonsWrapper>
    </PageTeacher>
  );
};

export default QuizDetail;
