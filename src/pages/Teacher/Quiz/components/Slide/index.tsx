import React from 'react';

import {
  ActionsWrapper,
  SlideWrapper,
  SlideText,
  IconTrash,
  IconEdit,
  Number,
  Timer,
} from './styled';

const Slide: React.FC = () => {
  return (
    <SlideWrapper>
      <Number>
        <sup>1</sup>/<sub>10</sub>
      </Number>
      <Timer>60</Timer>
      <SlideText>Pergunta do quiz</SlideText>
      <ActionsWrapper>
        <IconEdit />
        <IconTrash />
      </ActionsWrapper>
    </SlideWrapper>
  );
};

export default Slide;
