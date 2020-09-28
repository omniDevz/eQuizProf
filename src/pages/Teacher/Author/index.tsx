import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { MdYoutubeSearchedFor } from 'react-icons/md';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageTeacher from '../../../components/PageTeacher';
import List from './components/List';

import useForm from '../../../hooks/useForm';

import api from '../../../services/api';

import { Form, ButtonWrapper } from './styled';

import { AuthorProps, AuthorApiProps } from './interface';

const Author: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const [listAuthors, setListAuthors] = useState<AuthorProps[]>([]);

  const { addToast } = useToasts();

  useEffect(() => {
    api
      .get('/autor')
      .then(({ data }) => {
        const authorFromApi: AuthorProps[] = data.map(
          (author: AuthorApiProps) => {
            const newAuthor: AuthorProps = {
              authorId: author.autorId,
              firstname: author.nome,
              lastname: author.sobrenome,
              inactive: author.inativo,
              lastUserUpdate: author.ultimoUsuarioAlteracao,
            };

            return newAuthor;
          }
        );

        setListAuthors(authorFromApi);
      })
      .catch(({ response }) => {
        const { data } = response;
        addToast(data, {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }, [addToast]);

  return (
    <PageTeacher type="back" text="Autores">
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
      <List list={listAuthors} />
      <ButtonWrapper>
        <Button
          color="primary-outline"
          to="/teacher/author/new"
          title="Cadastrar autor"
        >
          Cadastrar autor
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default Author;
