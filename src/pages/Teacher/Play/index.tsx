import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import Question from './pages/Question';
import Result from './pages/Result';
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
  const [, setMovQuiz] = useState<IMovQuiz>({} as IMovQuiz);
  const [quiz, setQuiz] = useState<IQuiz>({} as IQuiz);
  const [listQuiz, setListQuiz] = useState<IQuizById[]>([]);
  const [currentObject, setCurrentObject] = useState(0);
  const [statusQuiz, setStatusQuiz] = useState(0);
  const [totalObject, setTotalObject] = useState(0);

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
        setTotalObject(questionSlidesFromApi.length);
      })
      .catch((err) => {
        console.error(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  function handleGetCurrentObject() {
    if (statusQuiz !== 2 && statusQuiz !== 1) return;

    api
      .get(`movQuiz/objetoAtual/${movQuizId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'error',
            autoDismiss: true,
          });
          return;
        }

        setCurrentObject(response.data.objetoAtual);
      })
      .catch((err) => {
        console.error(err);
        addToast(
          'Houve algum erro inesperado ao obter pergunta/slide atual, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleInitNewQuestion(questionQuizId: number) {
    if (questionQuizId === 0 || questionQuizId === null) return;

    api
      .post('movQuizPergunta', {
        movQuizId,
        perguntaQuizId: questionQuizId,
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'error',
            autoDismiss: true,
          });
          return;
        }
      })
      .catch((err) => {
        console.error(err);
        addToast(
          'Houve algum erro inesperado ao enviar nova pergunta a base, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetMovQuiz, [movQuizId, addToast]);
  useEffect(handleGetListQuiz, [quiz, addToast]);
  useEffect(handleGetCurrentObject, [statusQuiz, addToast]);

  function handleNextObjectInQuiz(nextObject: number) {
    api
      .put(`movQuiz/persistirQuiz`, {
        movQuizId,
        objetoAtual: nextObject,
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        setCurrentObject(nextObject);
      })
      .catch((err) => {
        console.error(err.message);
        addToast(
          'Houve algum erro inesperado trocar a pergunta, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleResultStatusQuiz(statusQuiz: number) {
    api
      .put(`movQuiz/persistirQuiz`, {
        movQuizId,
        objetoAtual: null,
        statusQuiz,
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        setStatusQuiz(statusQuiz);
      })
      .catch((err) => {
        console.error(err.message);
        addToast(
          'Houve algum erro inesperado ir para tela de resultados, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

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
      case 2:
        const currentObjectQuiz = listQuiz.find(
          (q) => q.orderByQuiz === currentObject
        );

        return currentObjectQuiz?.slideQuiz !== null &&
          currentObjectQuiz?.slideQuiz !== undefined ? (
          <Slide
            slide={currentObjectQuiz?.slideQuiz}
            totalObject={totalObject}
            handleNextObjectInQuiz={handleNextObjectInQuiz}
            handleResultStatusQuiz={handleResultStatusQuiz}
          />
        ) : (
          <Question
            question={currentObjectQuiz?.questionQuiz}
            handleNextObjectInQuiz={handleNextObjectInQuiz}
            handleInitNewQuestion={handleInitNewQuestion}
            handleResultStatusQuiz={handleResultStatusQuiz}
            totalObject={totalObject}
          />
        );

      case 3:
        return <Result movQuizId={movQuizId} />;
    }
  }

  return <>{handleViewStatus()}</>;
};

export default Play;
