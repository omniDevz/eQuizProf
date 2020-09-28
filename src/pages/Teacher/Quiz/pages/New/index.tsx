import React, { useState } from 'react';

import Button from '../../../../../components/Button';
import CheckButton from '../../../../../components/CheckButton';
import FormField from '../../../../../components/FormField';
import PageTeacher from '../../../../../components/PageTeacher';

import { Form, ButtonWrapper } from './styled';

const QuizNew: React.FC = () => {
  const [name, setName] = useState('');
  const [onlyStudentsRegister, setOnlyStudentsRegister] = useState(false);

  return (
    <PageTeacher type="back" text="Novo quiz">
      <Form>
        <FormField
          label="Nome"
          name="name"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
        />
        <CheckButton
          label="Apenas alunos cadastrados"
          name="onlyStudentsRegister"
          value={onlyStudentsRegister}
          setValue={setOnlyStudentsRegister}
        />
      </Form>
      <ButtonWrapper>
        <Button color="primary">Salvar</Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default QuizNew;
