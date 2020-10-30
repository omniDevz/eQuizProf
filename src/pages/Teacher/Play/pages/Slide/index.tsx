import React from 'react';

import Button from '../../../../../components/Button';

import {
  SlideWrapper,
  ButtonAction,
  SlideStyles,
  Number,
  Header,
} from './styled';

import { ISlidePage } from './interface';

const Slide: React.FC<ISlidePage> = ({
  handleResultStatusQuiz,
  handleNextObjectInQuiz,
  totalObject,
  slide,
}) => {
  function handleNextQuiz() {
    if (totalObject === slide?.orderByQuiz) {
      handleResultStatusQuiz(3);
      return;
    }

    handleNextObjectInQuiz((slide?.orderByQuiz || 0) + 1);
  }

  return (
    <SlideWrapper>
      <Header>
        <Number>
          <sup>{slide?.orderByQuiz}</sup>/<sub>{totalObject}</sub>
        </Number>
      </Header>
      <SlideStyles>{slide?.content}</SlideStyles>
      <ButtonAction>
        <Button color="primary-outline" onClick={handleNextQuiz}>
          Continuar
        </Button>
      </ButtonAction>
    </SlideWrapper>
  );
};

export default Slide;
