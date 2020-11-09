import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import FormField from '../../../components/FormField';
import PageTeacher from '../../../components/PageTeacher';
import Button from '../../../components/Button';

import api from '../../../services/api';
import { useAuth } from '../../../contexts/auth';

import { Title, Description, FormFieldWrapper, ButtonWrapper } from './styled';

const Live: React.FC = () => {
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');

  const { addToast } = useToasts();
  const { user } = useAuth();
  const history = useHistory();

  function handleInitStream() {
    api
      .post('notificacaoTransmissao', {
        link: link,
        descricao: description,
        professorId: user?.teacherId,
        ultimoUsuarioAlteracao: user?.personId,
      })
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Live iniciada com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push(`/live/streaming/${data}`);
      })
      .catch((err) => {
        console.log(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  return (
    <PageTeacher type="back" text="Live">
      <Title>Live Stream</Title>
      <Description>
        Inicie uma live para todos os seus alunos registrados
      </Description>
      <FormFieldWrapper>
        <FormField
          label="Descrição"
          name="description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
          maxLength={250}
        />
        <FormField
          label="Link"
          name="link"
          value={link}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLink(e.target.value)
          }
          maxLength={2500}
        />
      </FormFieldWrapper>
      <ButtonWrapper>
        <Button color="primary-outline" onClick={handleInitStream}>
          Começar
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default Live;
