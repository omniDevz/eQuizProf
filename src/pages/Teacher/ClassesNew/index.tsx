import React from 'react';

import PageDefaultProf from '../../../components/PageDefaultProf';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

import { Form } from './styled';

const ClassesNew: React.FC = () => {
  const valuesInitials = {
    name: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageDefaultProf type="back" text="Nova turma">
      <Form>
        <FormField
          label="Nome da turma"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <Button color="primary">Cadastrar turma</Button>
      </Form>
    </PageDefaultProf>
  );
};

export default ClassesNew;
