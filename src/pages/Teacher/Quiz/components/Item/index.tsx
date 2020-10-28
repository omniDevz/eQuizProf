import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import util from '../../../../../utils/util';
import api from '../../../../../services/api';

import {
  DescriptionQuiz,
  ButtonsWrapper,
  ItemWrapper,
  HeaderItem,
  NameQuiz,
  Infos,
} from './styled';

import { IQuizItem } from './interface';

const Item: React.FC<IQuizItem> = ({ quizId, name, description }) => {
  const { addToast } = useToasts();
  const history = useHistory();

  function handleInitQuizCode() {
    api
      .post('movQuiz', {
        quizId,
        dataHoraInicio: util.getDateAndHoursNow(),
        statusQuiz: 0,
        objetoAtual: 0,
      })
      .then(({ data, status }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Quiz iniciado com sucesso', {
          appearance: 'warning',
          autoDismiss: true,
        });

        history.push(`/play/${data}`);
      })
      .catch((err) => {
        console.error(err.response);
        addToast(
          'Houve algum erro inesperado no inicio do quiz, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  return (
    <ItemWrapper>
      <HeaderItem>
        <Infos>
          <NameQuiz>{name}</NameQuiz>
          <DescriptionQuiz>{description}</DescriptionQuiz>
        </Infos>
        <Link to={`/quiz/${quizId}`} title="Planeje seu quiz">
          <FiEdit />
        </Link>
      </HeaderItem>
      <ButtonsWrapper>
        <Button color="primary-outline" onClick={handleInitQuizCode}>
          Iniciar quiz
        </Button>
      </ButtonsWrapper>
    </ItemWrapper>
  );
};

export default Item;
