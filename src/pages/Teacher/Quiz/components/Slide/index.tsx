import React from 'react';
import { Link } from 'react-router-dom';

import {
  ActionsWrapper,
  SlideWrapper,
  SlideText,
  IconTrash,
  IconEdit,
  Number,
} from './styled';

import { ISlide } from './interface';

const Slide: React.FC<ISlide> = ({ slide, onRemove }) => {
  return (
    <SlideWrapper>
      <Number>
        <sup>{slide?.orderByQuiz}</sup>/<sub>{slide?.count}</sub>
      </Number>
      <SlideText dangerouslySetInnerHTML={{ __html: slide?.content || '' }} />
      <ActionsWrapper>
        <Link
          to={`/quiz/${slide?.quizId}/slide/update/${slide?.slideQuizId}`}
          title="Alterar dados do slide"
        >
          <IconEdit />
        </Link>
        <IconTrash
          onClick={() => onRemove(slide?.slideQuizId || 0)}
          title="Remover o slide do quiz"
        />
      </ActionsWrapper>
    </SlideWrapper>
  );
};

export default Slide;
