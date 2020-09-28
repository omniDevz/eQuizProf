import React from 'react';

import PageTeacher from '../../../../../components/PageTeacher';
import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import useForm from '../../../../../hooks/useForm';

import { Form } from './styled';

const ClassesNew: React.FC = () => {
  const valuesInitials = {
    name: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageTeacher type="back" text="Nova turma">
      <Form>
        <FormField
          label="Nome da turma"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <Button color="primary">Cadastrar turma</Button>
      </Form>
    </PageTeacher>
  );
};

export default ClassesNew;
