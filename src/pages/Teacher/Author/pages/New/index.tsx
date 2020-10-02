import React from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageTeacher from '../../../../../components/PageTeacher';

import useForm from '../../../../../hooks/useForm';
import api from '../../../../../services/api';

import { Form, ButtonWrapper } from './styled';

const AuthorNew: React.FC = () => {
  const valuesInitials = {
    firstname: '',
    lastName: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  const { addToast } = useToasts();
  const history = useHistory();

  function handleRegisterAuthor() {
    api
      .post('/autor', {
        Nome: values.firstname,
        Sobrenome: values.lastName,
        UltimoUsuarioAlteracao: 1,
      })
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Autor cadastrado com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/teacher/author');
      })
      .catch(({ response }) => {
        const { data } = response;
        addToast(data, {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  return (
    <PageTeacher type="back" text="Novo autor">
      <Form>
        <FormField
          label="Nome"
          name="firstname"
          value={values.firstname}
          onChange={handleChange}
        />
        <FormField
          label="Sobrenome"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
      </Form>
      <ButtonWrapper>
        <Button color="primary" onClick={handleRegisterAuthor}>
          Salvar
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default AuthorNew;
