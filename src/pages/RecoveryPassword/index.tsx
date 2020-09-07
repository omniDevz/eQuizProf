import React from 'react';
import { FiSend } from 'react-icons/fi';

import FormField from '../../components/FormField';
import PageDefault from '../../components/PageDefault';

import useForm from '../../hooks/useForm';

import { Title, Description, Form, FieldsWrapper, LinkLogin } from './styled';
import { Link } from 'react-router-dom';

function RecoveryPassword() {
  const valuesInitials = {
    recovery: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefault>
      <Title>Esqueceu a Senha?</Title>
      <Description>
        Enviaremos código para seu e-mail, verifique seu spam
      </Description>

      <Form>
        <FieldsWrapper>
          <FormField
            label="E-mail ou CPF"
            name="recovery"
            value={values.recovery}
            onChange={handleChange}
          >
            <Link to="/recoveryPasswordCode">
              <FiSend />
            </Link>
          </FormField>
        </FieldsWrapper>
      </Form>
      <LinkLogin to="/login" title="Faça o login">
        Lembrou a senha? <b>Faça o login</b>
      </LinkLogin>
    </PageDefault>
  );
}

export default RecoveryPassword;
