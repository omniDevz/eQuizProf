import React from 'react';

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

const Question: React.FC = () => {
  return (
    <>
      <QuestionWrapper>
        <Header>
          <Number>
            <sup>3</sup>/<sub>9</sub>
          </Number>
          <Timer>60</Timer>
        </Header>
        <QuestionStyles>Aguarde o professor iniciar o Quiz</QuestionStyles>
        <ResponseWrapper>
          <Response>Acho que seja a resposta certo, acertei?!!</Response>
          <ButtonsWrapper active={1}>
            <Button>
              A <IconError />
              <IconRight />
            </Button>
            <Button>
              B <IconError />
              <IconRight />
            </Button>
            <Button>
              C <IconError />
              <IconRight />
            </Button>
            <Button>
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
