import React from 'react';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageTeacher from '../../../../../components/PageTeacher';

import useForm from '../../../../../hooks/useForm';

import { Form, ButtonWrapper } from './styled';

const BookNew: React.FC = () => {
  const valuesInitials = {
    title: '',
    description: '',
    link: '',
    author: '',
    datePublication: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageTeacher type="back" text="Novo livro">
      <Form>
        <FormField
          label="Título"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
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
          type="url"
        />
        <FormField
          label="Autor"
          name="author"
          value={values.author}
          onChange={handleChange}
        />
        <FormField
          label="Data de publicação"
          name="datePublication"
          value={values.datePublication}
          onChange={handleChange}
          type="date"
        />
      </Form>
      <ButtonWrapper>
        <Button color="primary">Salvar</Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default BookNew;
