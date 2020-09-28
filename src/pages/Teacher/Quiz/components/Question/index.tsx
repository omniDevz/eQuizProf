import React from 'react';
import { Link } from 'react-router-dom';
import {
  QuestionWrapper,
  ResponseWrapper,
  ActionsWrapper,
  QuestionText,
  IconTrash,
  IconEdit,
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
        <Response>Resposta 02</Response>
        <Response>Resposta 03</Response>
        <Response>Resposta 04</Response>
      </ResponseWrapper>
      <ActionsWrapper>
        <Link
          to={`/teacher/quiz/${1}/question/update`}
          title="Alterar dados da pergunta"
        >
          <IconEdit />
        </Link>
        <IconTrash />
      </ActionsWrapper>
    </QuestionWrapper>
  );
};

export default Question;
