import React from 'react';
import {
  QuestionWrapper,
  ResponseWrapper,
  QuestionText,
  Response,
  Number,
  Timer,
} from './styled';

const Question: React.FC = () => {
  return (
    <QuestionWrapper>
      <Number>
        <sup>1</sup>/<sub>10</sub>
      </Number>
      <Timer>60</Timer>
      <QuestionText>Pergunta do quiz</QuestionText>
      <ResponseWrapper>
        <Response>Resposta 01</Response>
        <Response>Resposta 01</Response>
        <Response>Resposta 01</Response>
        <Response>Resposta 01</Response>
      </ResponseWrapper>
    </QuestionWrapper>
  );
};

export default Question;
