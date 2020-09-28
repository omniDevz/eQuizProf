import React from 'react';
import { MdYoutubeSearchedFor } from 'react-icons/md';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageTeacher from '../../../components/PageTeacher';
import useForm from '../../../hooks/useForm';
import Item from './components/Item';

import { Form, ListQuizzes, ButtonWrapper } from './styled';

const Quiz: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageTeacher type="back" text="Quizzes">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={values.search}
          onChange={handleChange}
          stroke="0.5"
        >
          <MdYoutubeSearchedFor />
        </FormField>
      </Form>
      <ListQuizzes>
        <Item name="Nome quiz" />
        <Item name="Nome quiz" />
        <Item name="Nome quiz" />
        <Item name="Nome quiz" />
        <Item name="Nome quiz" />
        <Item name="Nome quiz" />
        <Item name="Nome quiz" />
        <Item name="Nome quiz" />
      </ListQuizzes>
      <ButtonWrapper>
        <Button
          color="primary-outline"
          to="/teacher/quiz/new"
          title="Cadastrar quiz"
        >
          Cadastrar quiz
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default Quiz;
