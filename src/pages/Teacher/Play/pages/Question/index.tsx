import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import ButtonControl from '../../../../../components/Button';

import api from '../../../../../services/api';

import {
  QuestionWrapper,
  ResponseWrapper,
  QuestionStyles,
  ButtonsWrapper,
  ButtonAction,
  IconError,
  IconRight,
  Response,
  Number,
  Button,
  Header,
  Timer,
} from './styled';

import { IQuestionPage } from './interface';

const Question: React.FC<IQuestionPage> = ({
  question,
  movQuizId,
  statusQuiz,
  totalObject,
  setStatusQuiz,
  handleInitNewQuestion,
  handleResultStatusQuiz,
  handleNextObjectInQuiz,
}) => {
  const [currentAlternativeSelect, setCurrentAlternativeSelect] = useState<
    1 | 2 | 3 | 4
  >(1);
  const [alternativeIsRight, setAlternativeIsRight] = useState<1 | 2 | 3 | 4>(
    1
  );
  const [time, setTime] = useState<number | undefined>(undefined);

  const { addToast } = useToasts();

  function handleSetAlternative() {
    switch (question?.letterAlternativeCorrect) {
      case 'A':
        setAlternativeIsRight(1);
        break;
      case 'B':
        setAlternativeIsRight(2);
        break;
      case 'C':
        setAlternativeIsRight(3);
        break;
      case 'D':
        setAlternativeIsRight(4);
        break;
    }
  }

  useEffect(handleSetAlternative, [question]);

  useEffect(() => setTime(question?.timeSeconds), [question]);

  function handleSetTime() {
    if (time === undefined) setTime(question?.timeSeconds);

    if ((time || 0) > 0) {
      let timerInterval = setInterval(() => {
        setTime((c) => (c || 0) - 1);
      }, 1000);
      return () => clearInterval(timerInterval);
    } else if (time === -1) {
      setTime(undefined);
    }
  }

  useEffect(handleSetTime, [time, question]);

  function handleIsNextQuestion() {
    if (time !== 0 || statusQuiz === 2) return;

    if (totalObject === question?.orderByQuiz) {
      handleResultStatusQuiz(3);
      return;
    }

    setTime(-1);
    handleNextObjectInQuiz((question?.orderByQuiz || 0) + 1);
  }

  useEffect(handleIsNextQuestion, [
    handleNextObjectInQuiz,
    totalObject,
    question,
    time,
  ]);

  function handleInitQuestion() {
    handleInitNewQuestion(question?.questionQuizId || 0);
  }

  useEffect(handleInitQuestion, [question]);

  function handleContinueQuiz() {
    api
      .put(`movQuiz/PersistirQuiz`, {
        movQuizId,
        objetoAtual: null,
        statusQuiz: 1,
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Continuando quiz', {
          appearance: 'info',
          autoDismiss: true,
        });
        setStatusQuiz(1);
      })
      .catch((err) => {
        console.error(err.message);
        addToast(
          'Houve algum erro inesperado ao pausar o quiz, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handlePauseQuiz() {
    api
      .put(`movQuiz/PersistirQuiz`, {
        movQuizId,
        objetoAtual: null,
        statusQuiz: 2,
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Quiz será pausado no final do timer', {
          appearance: 'info',
          autoDismiss: true,
        });
        setStatusQuiz(2);
      })
      .catch((err) => {
        console.error(err.message);
        addToast(
          'Houve algum erro inesperado ao pausar o quiz, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handlePauseContinueQuiz() {
    if (statusQuiz === 1 || (time || 0) > 0) {
      handlePauseQuiz();
    } else {
      handleContinueQuiz();
    }
  }

  return (
    <>
      <QuestionWrapper>
        <Header>
          <Number>
            <sup>{question?.orderByQuiz || 0}</sup>/<sub>{totalObject}</sub>
          </Number>
          <Timer>{statusQuiz === 1 || (time || 0) > 0 ? time : '='}</Timer>
        </Header>
        <QuestionStyles
          dangerouslySetInnerHTML={{ __html: question?.text || '' }}
        />
        <ResponseWrapper>
          <Response
            dangerouslySetInnerHTML={{
              __html:
                question?.alternativeQuiz[currentAlternativeSelect - 1]?.text ||
                '',
            }}
          />
          <ButtonsWrapper
            active={alternativeIsRight}
            correct={currentAlternativeSelect}
          >
            <Button onClick={() => setCurrentAlternativeSelect(1)}>
              A <IconError />
              <IconRight />
            </Button>
            <Button onClick={() => setCurrentAlternativeSelect(2)}>
              B <IconError />
              <IconRight />
            </Button>
            <Button onClick={() => setCurrentAlternativeSelect(3)}>
              C <IconError />
              <IconRight />
            </Button>
            <Button onClick={() => setCurrentAlternativeSelect(4)}>
              D <IconError />
              <IconRight />
            </Button>
          </ButtonsWrapper>
        </ResponseWrapper>
      </QuestionWrapper>
      <ButtonAction>
        <ButtonControl
          color="primary-outline"
          onClick={handlePauseContinueQuiz}
        >
          {statusQuiz === 1 || (time || 0) > 0 ? 'Pausar' : 'Continuar quiz'}
        </ButtonControl>
      </ButtonAction>
    </>
  );
};

export default Question;
