import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import Await from './pages/Await';

import api from '../../../services/api';

import {
  IMovQuizApi,
  IPlayParams,
  IMovQuiz,
  IQuizApi,
  IQuiz,
} from './interface';

const Play: React.FC = () => {
  const [movQuiz, setMovQuiz] = useState<IMovQuiz>({} as IMovQuiz);
  const [quiz, setQuiz] = useState<IQuiz>({} as IQuiz);

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

  useEffect(handleGetMovQuiz, [movQuiz, quiz, movQuizId, addToast]);

  return <Await movQuizId={Number(movQuizId)} />;
};

export default Play;
