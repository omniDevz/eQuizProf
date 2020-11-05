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

const Question: React.FC<IQuestion> = ({ question, onRemove }) => {
  return (
    <QuestionWrapper>
      <Number>
        <sup>{question?.orderByQuiz}</sup>/<sub>{question?.count}</sub>
      </Number>
      <Timer>{question?.timeSeconds}s</Timer>
      <QuestionText
        dangerouslySetInnerHTML={{ __html: question?.text || '' }}
      />
      <ResponseWrapper>
        {question?.alternativeQuiz.map((alternative) => (
          <Response
            key={alternative.alternativeQuizId}
            dangerouslySetInnerHTML={{
              __html:
                `${alternative.letterAlternative}: ${alternative.text}` || '',
            }}
          />
        ))}
      </ResponseWrapper>
      <ActionsWrapper>
        <Link
          to={`/quiz/${question?.quizId}/question/update/${question?.questionQuizId}`}
          title="Alterar dados da pergunta"
        >
          <IconEdit />
        </Link>
        <IconTrash
          onClick={() => onRemove(question?.questionQuizId || 0)}
          title="Remover a pergunta"
        />
      </ActionsWrapper>
    </QuestionWrapper>
  );
};

export default Question;
