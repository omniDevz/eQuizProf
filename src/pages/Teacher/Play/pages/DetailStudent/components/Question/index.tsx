import React from 'react';

import {
  IconRightResponse,
  IconErrorResponse,
  QuestionWrapper,
  ResponseWrapper,
  QuestionText,
  ResponseText,
  IconUpScore,
  InfoWrapper,
  Header,
  Number,
} from './styled';

import { QuestionProps } from './interface';

const Question: React.FC<QuestionProps> = ({ responseStudent }) => {
  return (
    <>
      {!!responseStudent &&
        responseStudent.map((response) => {
          return response.correct ? (
            <QuestionWrapper key={response.numberQuestion}>
              <Header>
                <Number>
                  <sup>{response.numberQuestion}</sup>/
                  <sub>{responseStudent.length}</sub>
                </Number>
                <InfoWrapper>
                  {response.points} <IconUpScore />
                </InfoWrapper>
              </Header>
              <QuestionText>{response.content}</QuestionText>
              <ResponseWrapper>
                <ResponseText>{response.descriptionCorrect}</ResponseText>
                <IconRightResponse />
              </ResponseWrapper>
            </QuestionWrapper>
          ) : (
            <QuestionWrapper key={response.numberQuestion}>
              <Header>
                <Number>
                  <sup>{response.numberQuestion}</sup>/
                  <sub>{responseStudent.length}</sub>
                </Number>
                <QuestionText>{response.content}</QuestionText>
              </Header>
              <ResponseWrapper>
                <ResponseText>{response.descriptionSelection}</ResponseText>
                <IconErrorResponse />
              </ResponseWrapper>
              <ResponseWrapper>
                <ResponseText>{response.descriptionCorrect}</ResponseText>
                <IconRightResponse />
              </ResponseWrapper>
            </QuestionWrapper>
          );
        })}
    </>
  );
};

export default Question;
