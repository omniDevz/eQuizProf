import React from 'react';

import Button from '../../../../../components/Button';
import PageTeacher from '../../../../../components/PageTeacher';
import Question from '../../components/Question';

import { Header, Name, Code, IconEdit } from './styled';

const QuizDetail: React.FC = () => {
  return (
    <PageTeacher type="back" text="Quiz">
      <Header>
        <Name>Nome quiz</Name>
        <Code>#code</Code>
        <IconEdit />
      </Header>
      <Question />
    </PageTeacher>
  );
};

export default QuizDetail;
