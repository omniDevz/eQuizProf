import React from 'react';
import { Link } from 'react-router-dom';

import {
  ActionsWrapper,
  SlideWrapper,
  SlideText,
  IconTrash,
  IconEdit,
  Number,
  Timer,
} from './styled';

import { ISlide } from './interface';

const Slide: React.FC<ISlide> = ({ slide }) => {
  return (
    <SlideWrapper>
      <Number>
        <sup>{slide?.orderByQuiz}</sup>/<sub>{slide?.count}</sub>
      </Number>
      <SlideText>{slide?.content}</SlideText>
      <ActionsWrapper>
        <Link
          to={`/quiz/${slide?.slideQuizId}/slide/update`}
          title="Alterar dados do slide"
        >
          <IconEdit />
        </Link>
        <IconTrash />
      </ActionsWrapper>
    </SlideWrapper>
  );
};

export default Slide;
