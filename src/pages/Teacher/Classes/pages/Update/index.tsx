import React from 'react';

import PageDefaultProf from '../../../../../components/PageDefaultProf';
import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import useForm from '../../../../../hooks/useForm';

import { Form, ButtonsWrapper } from './styled';

const ClassesUpdate: React.FC = () => {
  const valuesInitials = {
    name: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefaultProf type="back" text="Alterar turma">
      <Form>
        <FormField
          label="Nome da turma"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <ButtonsWrapper>
          <Button color="primary">Cadastrar turma</Button>
          <Button color="primary-outline">Exluir turma</Button>
        </ButtonsWrapper>
      </Form>
    </PageDefaultProf>
  );
};

export default ClassesUpdate;
