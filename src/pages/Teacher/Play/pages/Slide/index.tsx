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

const Slide: React.FC<ISlidePage> = ({ slide, totalObject }) => {
  return (
    <SlideWrapper>
      <Header>
        <Number>
          <sup>{slide?.orderByQuiz}</sup>/<sub>{totalObject}</sub>
        </Number>
      </Header>
      <SlideStyles>{slide?.content}</SlideStyles>
      <ButtonAction>
        <Button color="primary-outline">Continuar</Button>
      </ButtonAction>
    </SlideWrapper>
  );
};

export default Slide;
