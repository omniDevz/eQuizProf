import React from 'react';

import FormField from '../../../../components/FormField';
import Button from '../../../../components/Button';
import PageDefault from '../../../../components/PageDefault';

import useForm from '../../../../hooks/useForm';

import { Title, Description, Form, FieldsWrapper } from './styled';

function RecoveryPasswordNew() {
  const valuesInitials = {
    newPassword: '',
    confirmNewPassword: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefault>
      <Title>Nova Senha</Title>
      <Description>Informe a nova senha de acesso ao English Quiz</Description>

      <Form>
        <FieldsWrapper>
          <FormField
            label="Senha"
            name="newPassword"
            value={values.newPassword}
            onChange={handleChange}
            type="password"
            maxLength={32}
          />
          <FormField
            label="Confirmar senha"
            name="confirmNewPassword"
            value={values.confirmNewPassword}
            onChange={handleChange}
            type="password"
            maxLength={32}
          />
        </FieldsWrapper>
        <Button color="primary">Salvar</Button>
      </Form>
    </PageDefault>
  );
}

export default RecoveryPasswordNew;
