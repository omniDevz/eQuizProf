import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useHistory, useParams } from 'react-router';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageTeacher from '../../../../../components/PageTeacher';

import api from '../../../../../services/api';

import { Form, ButtonsWrapper } from './styled';

import { IQuizUpdateParams, IQuizApi } from './interface';
import { useAuth } from '../../../../../contexts/auth';

const QuizUpdate: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { quizId } = useParams<IQuizUpdateParams>();

  const { addToast } = useToasts();
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`quiz/${quizId}`)
      .then(({ data }) => {
        const quizApi: IQuizApi = data;

        setName(quizApi.nome);
        setDescription(quizApi.descricao);
      })
      .catch((err) => {
        console.error(err.response);
        addToast(
          'Houve algum erro inesperado ao obter dados do quiz, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [quizId, addToast]);

  function handleUpdateQuiz() {
    api
      .put('quiz', {
        quizId,
        professorId: user?.teacherId,
        nome: name,
        descricao: description,
      })
      .then(({ data, status }) => {
        if (status === 206) {
          console.error(data);
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Dados do quiz alterados com sucesso!', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push(`/quiz/${quizId}`);
      })
      .catch((err) => {
        console.error(err.response);
        addToast(
          'Houve algum erro inesperado ao salvar dados do quiz, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleDeleteQuiz() {
    api
      .delete(`quiz/${quizId}`)
      .then(({ data, status }) => {
        if (status === 206) {
          console.error(data);
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Quiz removido com sucesso!', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push(`/quiz`);
      })
      .catch((err) => {
        console.error(err.response);
        addToast(
          'Houve algum erro inesperado ao remover quiz, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

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
        <Button color="primary-outline" onClick={handleDeleteQuiz}>
          Excluir
        </Button>
        <Button color="primary" onClick={handleUpdateQuiz}>
          Salvar
        </Button>
      </ButtonsWrapper>
    </PageTeacher>
  );
};

export default QuizUpdate;
