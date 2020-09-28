import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import PageTeacher from '../../../../../components/PageTeacher';
import Button from '../../../../../components/Button';

import api from '../../../../../services/api';

import { Stream, ButtonWrapper } from './styled';

import { ParamsProps } from './interface';

const Streaming: React.FC = () => {
  const { addToast } = useToasts();
  const history = useHistory();
  let { streamingId } = useParams<ParamsProps>();

  function handleExitStream() {
    api
      .delete(`/notificacaoTransmissao/${streamingId}`)
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Live encerrada', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/teacher/live');
      })
      .catch(({ response }) => {
        const { data } = response;
        console.error(data);
      });
  }

  return (
    <PageTeacher type="back" text="Streaming">
      <Stream>
        <img src="https://source.unsplash.com/random/person" alt="" />
      </Stream>
      <ButtonWrapper>
        <Button color="primary-outline" onClick={handleExitStream}>
          Encerrar
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default Streaming;
