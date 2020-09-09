import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';

import FormField from '../../components/FormField';
import PageDefault from '../../components/PageDefault';

import useForm from '../../hooks/useForm';

import { Title, Description, Form, FieldsWrapper, LinkLogin } from './styled';

function RecoveryPasswordCode() {
  const valuesInitials = {
    code: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefault>
      <Title>Recebeu o Código?</Title>
      <Description>
        Informe o código que chegou ao seu e-mail, verifique seu spam
      </Description>

      <Form>
        <FieldsWrapper>
          <FormField
            label="Código"
            name="code"
            value={values.code}
            onChange={handleChange}
          >
            <Link to="/recoveryPasswordNew">
              <FiCheck />
            </Link>
          </FormField>
        </FieldsWrapper>
      </Form>
      <LinkLogin to="/login" title="Faça o login">
        Não recebeu? <b>Envie novamente</b>
      </LinkLogin>
    </PageDefault>
  );
}

export default RecoveryPasswordCode;
