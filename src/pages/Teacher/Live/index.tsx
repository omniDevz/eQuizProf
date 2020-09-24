import React, { useState } from 'react';

import FormField from '../../../components/FormField';
import PageDefaultProf from '../../../components/PageDefaultProf';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';

import { Title, Description, FormFieldWrapper, ButtonWrapper } from './styled';

const Live: React.FC = () => {
  const valuesInitials = {
    description: '',
    link: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefaultProf type="back" text="Live">
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
        <Button color="primary-outline" to="/teacher/live/streaming">
          Começar
        </Button>
      </ButtonWrapper>
    </PageDefaultProf>
  );
};

export default Live;
