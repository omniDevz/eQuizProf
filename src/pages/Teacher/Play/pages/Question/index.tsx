import React, { useEffect, useState } from 'react';

import ButtonControl from '../../../../../components/Button';

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

const Question: React.FC<IQuestionPage> = ({ question, totalObject }) => {
  const [currentAlternativeSelect, setCurrentAlternativeSelect] = useState<
    1 | 2 | 3 | 4
  >(1);
  const [alternativeIsRight, setAlternativeIsRight] = useState<1 | 2 | 3 | 4>(
    1
  );

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
  return (
    <>
      <QuestionWrapper>
        <Header>
          <Number>
            <sup>{question?.orderByQuiz || 0}</sup>/<sub>{totalObject}</sub>
          </Number>
          <Timer>{question?.timeSeconds}</Timer>
        </Header>
        <QuestionStyles>{question?.text}</QuestionStyles>
        <ResponseWrapper>
          <Response>
            {question?.alternativeQuiz[currentAlternativeSelect - 1]?.text ||
              ''}
          </Response>
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
        <ButtonControl color="primary-outline">Pausar</ButtonControl>
      </ButtonAction>
    </>
  );
};

export default Question;
