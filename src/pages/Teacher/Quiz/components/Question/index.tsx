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

import { IQuestion } from './interface';

const Question: React.FC<IQuestion> = ({ question }) => {
  return (
    <QuestionWrapper>
      <Number>
        <sup>{question?.orderByQuiz}</sup>/<sub>{question?.count}</sub>
      </Number>
      <Timer>{question?.timeSeconds}s</Timer>
      <QuestionText>{question?.text}</QuestionText>
      <ResponseWrapper>
        {question?.alternativeQuiz.map((alternative) => (
          <Response key={alternative.alternativeQuizId}>
            {alternative.letterAlternative}: {alternative.text}
          </Response>
        ))}
      </ResponseWrapper>
      <ActionsWrapper>
        <Link
          to={`/quiz/${question?.questionQuizId}/question/update`}
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
