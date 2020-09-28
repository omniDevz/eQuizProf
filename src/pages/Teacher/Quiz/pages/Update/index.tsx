import React, { useState } from 'react';

import Button from '../../../../../components/Button';
import CheckButton from '../../../../../components/CheckButton';
import FormField from '../../../../../components/FormField';
import PageTeacher from '../../../../../components/PageTeacher';

import { Form, ButtonsWrapper } from './styled';

const QuizUpdate: React.FC = () => {
  const [name, setName] = useState('');
  const [onlyStudentsRegister, setOnlyStudentsRegister] = useState(false);

  return (
    <PageTeacher type="back" text="Alterar quiz">
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
      <ButtonsWrapper>
        <Button color="primary-outline">Excluir</Button>
        <Button color="primary">Salvar</Button>
      </ButtonsWrapper>
    </PageTeacher>
  );
};

export default QuizUpdate;
