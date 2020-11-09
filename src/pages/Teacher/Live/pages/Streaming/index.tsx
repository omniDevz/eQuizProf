import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import PageTeacher from '../../../../../components/PageTeacher';
import Button from '../../../../../components/Button';

import api from '../../../../../services/api';

import { Live, Frame, Description, ButtonWrapper } from './styled';

import {
  ITransmissionNotificationApi,
  ITransmissionNotification,
  ParamsProps,
} from './interface';

const Streaming: React.FC = () => {
  const [live, setLive] = useState<ITransmissionNotification>(
    {} as ITransmissionNotification
  );

  const history = useHistory();
  const { addToast } = useToasts();
  const { streamingId } = useParams() as ParamsProps;

  function handleExitStream() {
    api
      .delete(`notificacaoTransmissao/${streamingId}`)
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
        history.push('/live');
      })
      .catch((err) => {
        console.log(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  function handleGetLive() {
    api
      .get(`notificacaoTransmissao/${streamingId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        const liveApi = response.data as ITransmissionNotificationApi;

        setLive({
          description: liveApi.descricao,
          TransmissionNotificationId: liveApi.notificacaoTransmissaoId,
          link: liveApi.link,
        });
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca por live, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetLive, []);

  return (
    <PageTeacher type="back" text="Streaming">
      <Live>
        <Description>{live.description}</Description>
        <Frame src={live.link} />
      </Live>
      <ButtonWrapper>
        <Button color="primary-outline" onClick={handleExitStream}>
          Encerrar
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default Streaming;
