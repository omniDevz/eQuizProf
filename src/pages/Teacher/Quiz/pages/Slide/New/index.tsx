import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useHistory, useParams } from 'react-router';

import Button from '../../../../../../components/Button';
import FormField from '../../../../../../components/FormField';
import PageTeacher from '../../../../../../components/PageTeacher';

import api from '../../../../../../services/api';

import { Form, ButtonWrapper } from './styled';

import { IQuizNewSlideParams } from './interface';

const SlideNew: React.FC = () => {
  const [text, setText] = useState('');
  const [orderBySlide, setOrderBySlide] = useState('');

  const { quizId } = useParams() as IQuizNewSlideParams;

  const history = useHistory();
  const { addToast } = useToasts();

  function handleSubmitNewSlideQuiz() {
    api
      .post('slideQuiz', {
        quizId,
        numeroSlide: orderBySlide,
        conteudoSlide: text,
      })
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        history.push(`/quiz/${quizId}`);

        addToast('Slide cadastrado com sucesso', {
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
  }

  return (
    <PageTeacher type="back" text="Novo slide">
      <Form>
        <FormField
          label="Frase"
          name="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <FormField
          label="Número de slide"
          name="text"
          value={orderBySlide}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setOrderBySlide(e.target.value)
          }
        />
      </Form>
      <ButtonWrapper>
        <Button color="primary" onClick={handleSubmitNewSlideQuiz}>
          Salvar
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default SlideNew;
