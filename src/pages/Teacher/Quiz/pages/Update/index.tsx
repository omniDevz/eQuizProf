import React, { useState } from 'react';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageTeacher from '../../../../../components/PageTeacher';

import { Form, ButtonsWrapper } from './styled';

const QuizUpdate: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

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
        <FormField
          label="Descrição"
          name="description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(e.target.value);
          }}
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
