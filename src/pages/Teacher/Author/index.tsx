import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { FiSearch } from 'react-icons/fi';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageTeacher from '../../../components/PageTeacher';
import List from './components/List';

import useForm from '../../../hooks/useForm';

import api from '../../../services/api';

import { Form, ButtonWrapper } from './styled';

import { AuthorProps, AuthorApiProps } from './interface';
import util from '../../../utils/util';

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
              firstName: author.nome,
              lastName: author.sobrenome,
              lastUserUpdate: author.ultimoUsuarioAlteracao,
            };

            return newAuthor;
          }
        );

        setListAuthors(authorFromApi);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [addToast]);

  function handleFilterAuthors(author: AuthorProps) {
    return (
      util.includesToLowerCase(author.firstName, values.search) ||
      util.includesToLowerCase(author.lastName, values.search)
    );
  }

  return (
    <PageTeacher type="back" text="Autores">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={values.search}
          onChange={handleChange}
        >
          <FiSearch />
        </FormField>
      </Form>
      <List
        list={listAuthors.filter((author) => handleFilterAuthors(author))}
      />
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
