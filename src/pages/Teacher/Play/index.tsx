import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import Question from './pages/Question';
import Await from './pages/Await';
import Slide from './pages/Slide';

import api from '../../../services/api';

import {
  IAlternativeQuizFromApi,
  IQuizByIdFromApi,
  IAlternativeQuiz,
  IMovQuizApi,
  IPlayParams,
  IQuizById,
  IMovQuiz,
  IQuizApi,
  IQuiz,
} from './interface';

const Play: React.FC = () => {
  const [movQuiz, setMovQuiz] = useState<IMovQuiz>({} as IMovQuiz);
  const [quiz, setQuiz] = useState<IQuiz>({} as IQuiz);
  const [listQuiz, setListQuiz] = useState<IQuizById[]>([]);
  const [currentObject, setCurrentObject] = useState(0);
  const [statusQuiz, setStatusQuiz] = useState(0);

  const { movQuizId } = useParams() as IPlayParams;
  const { addToast } = useToasts();

  const handleGetMovQuiz = () => {
    api
      .get(`movQuiz/${movQuizId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'error',
            autoDismiss: true,
          });
          return;
        }

        const movQuizApi = response.data as IMovQuizApi;

        const newMovQuiz = {
          dateTimeStart: movQuizApi.dataHoraInicio,
          movQuizId: Number(movQuizId),
          quizId: movQuizApi.quizId,
          statusQuiz: movQuizApi.statusQuiz,
          accessCode: movQuizApi.codigoAcesso,
          currentObject: movQuizApi.objetoAtual,
          dateTimeFinish: movQuizApi.dataHoraFim,
        } as IMovQuiz;

        const quizApi = movQuizApi.quiz as IQuizApi;

        const newQuiz = {
          quizId: quizApi.quizId,
          name: quizApi.nome,
          description: quizApi.descricao,
        } as IQuiz;

        setMovQuiz(newMovQuiz);
        setQuiz(newQuiz);
        setStatusQuiz(movQuizApi.statusQuiz);
      })
      .catch((err) => {
        console.error(err.response);
        addToast(
          'Houve algum erro inesperado ao obter dados do quiz, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  };

  function handleGetListQuiz() {
    if (!quiz?.quizId) return;

    api
      .get(`movQuizSlidePergunta/quizId/${quiz.quizId}`)
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
  }

  useEffect(handleGetMovQuiz, [movQuizId, addToast]);
  useEffect(handleGetListQuiz, [quiz, addToast]);

  function handleViewStatus() {
    switch (statusQuiz) {
      case 0:
        return (
          <Await
            movQuizId={Number(movQuizId)}
            setCurrentObject={setCurrentObject}
            setStatusQuiz={setStatusQuiz}
          />
        );

      case 1:
        const currentObjectQuiz = listQuiz.find(
          (q) => q.orderByQuiz === currentObject
        );

        return !!currentObjectQuiz?.slideQuiz ? <Slide /> : <Question />;
    }
  }

  return <>{handleViewStatus()}</>;
};

export default Play;
