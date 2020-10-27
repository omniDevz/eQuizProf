import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../../components/Button';
import FormField from '../../../../../../components/FormField';
import PageTeacher from '../../../../../../components/PageTeacher';

import api from '../../../../../../services/api';

import { Form, ButtonsWrapper } from './styled';

import { IQuizSlideUpdateParams, ISlideQuizApi } from './interface';

const SlideUpdate: React.FC = () => {
  const [text, setText] = useState('');
  const [orderBySlide, setOrderBySlide] = useState('');
  const [orderByObject, setOrderByObject] = useState('');

  const { slideId, quizId } = useParams() as IQuizSlideUpdateParams;
  const { addToast } = useToasts();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`slideQuiz/${slideId}`)
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const slideApi = data as ISlideQuizApi;

        setText(slideApi.conteudoSlide);
        setOrderBySlide(String(slideApi.numeroSlide));
        setOrderByObject(String(slideApi.ordenacaoObjetoQuiz));
      })
      .catch((err) => {
        console.error(err);
        addToast(
          'Houve algum erro inesperado na busca deste slide, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [addToast, slideId]);

  function handleUpdateSlideQuiz() {
    api
      .put('slideQuiz', {
        quizId,
        slideQuizId: slideId,
        numeroSlide: orderBySlide,
        conteudoSlide: text,
        ordenacaoObjetoQuiz: orderByObject,
      })
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Slide alterado com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push(`/quiz/${quizId}`);
      })
      .catch((err) => {
        console.error(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  function handleDeleteSlideQuiz() {
    api
      .delete(`slideQuiz/${slideId}`)
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Slide removido com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });

        history.push(`/quiz/${quizId}`);
      })
      .catch((err) => {
        console.error(err);
        addToast(
          'Houve algum erro inesperado na remoção, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  return (
    <PageTeacher type="back" text="Alterar slide">
      <Form>
        <FormField
          label="Frase"
          name="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <FormField
          label="Número do slide"
          name="orderBySlide"
          value={orderBySlide}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setOrderBySlide(e.target.value);
          }}
        />
      </Form>
      <ButtonsWrapper>
        <Button color="primary-outline" onClick={handleDeleteSlideQuiz}>
          Excluir
        </Button>
        <Button color="primary" onClick={handleUpdateSlideQuiz}>
          Salvar
        </Button>
      </ButtonsWrapper>
    </PageTeacher>
  );
};

export default SlideUpdate;
