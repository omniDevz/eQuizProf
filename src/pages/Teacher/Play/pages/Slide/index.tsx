import React from 'react';

import Button from '../../../../../components/Button';

import {
  SlideWrapper,
  ButtonAction,
  SlideStyles,
  Number,
  Header,
  Timer,
} from './styled';

const Slide: React.FC = () => {
  return (
    <SlideWrapper>
      <Header>
        <Number>
          <sup>4</sup>/<sub>9</sub>
        </Number>
        <Timer>60</Timer>
      </Header>
      <SlideStyles>Aguarde o professor iniciar o Quiz</SlideStyles>
      <ButtonAction>
        <Button color="primary-outline">Pausar</Button>
      </ButtonAction>
    </SlideWrapper>
  );
};

export default Slide;
