import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import PageTeacher from '../../../../../components/PageTeacher';
import FormField from '../../../../../components/FormField';
import { useAuth } from '../../../../../contexts/auth';
import Button from '../../../../../components/Button';
import api from '../../../../../services/api';

import { Form, ButtonWrapper } from './styled';

const QuizNew: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { user } = useAuth();
  const history = useHistory();
  const { addToast } = useToasts();

  const handleSubmitQuiz = () => {
    api
      .post('quiz', {
        professorId: user?.teacherId,
        descricao: description,
        nome: name,
      })
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        history.push('/quiz');

        addToast('Quiz cadastrado com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
      })
      .catch((err) => {
        console.error(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  };

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
        <FormField
          label="Descrição"
          name="description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(e.target.value);
          }}
        />
      </Form>
      <ButtonWrapper>
        <Button color="primary" onClick={handleSubmitQuiz}>
          Cadastrar quiz
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default QuizNew;
