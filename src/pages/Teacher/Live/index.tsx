import React from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import FormField from '../../../components/FormField';
import PageTeacher from '../../../components/PageTeacher';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';

import { Title, Description, FormFieldWrapper, ButtonWrapper } from './styled';
import api from '../../../services/api';

const Live: React.FC = () => {
  const valuesInitials = {
    description: '',
    link: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const { addToast } = useToasts();
  const history = useHistory();

  function handleInitStream() {
    api
      .post('/notificacaoTransmissao', {
        Descricao: values.description,
        Link: values.link,
        ProfessorId: 1,
        UltimoUsuarioAlteracao: 0,
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
        history.push(`/teacher/live/streaming/${data}`);
      })
      .catch(({ response }) => {
        const { data } = response;
        console.error(data);
      });
  }

  return (
    <PageTeacher type="back" text="Live">
      <Title>Livestream</Title>
      <Description>
        Inicie uma live para todos os seus alunos registrados
      </Description>
      <FormFieldWrapper>
        <FormField
          label="Descrição"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Link"
          name="link"
          value={values.link}
          onChange={handleChange}
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
