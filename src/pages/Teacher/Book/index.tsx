import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiExternalLink } from 'react-icons/fi';

import { MdYoutubeSearchedFor } from 'react-icons/md';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageTeacher from '../../../components/PageTeacher';
import useForm from '../../../hooks/useForm';

import {
  Form,
  ListBooks,
  ItemBook,
  Description,
  FooterBook,
  Infos,
  Actions,
  ButtonWrapper,
} from './styled';
import Collapse from '../../../components/Collapse';

const Book: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageTeacher type="back" text="Livros">
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
      <ListBooks>
        <ItemBook>
          <Collapse label="Como fazer pao">
            <Description>
              Que tal aprender a fazer um pãozin neste artigo totalmente em
              inglês?
            </Description>

            <FooterBook>
              <Infos>
                <Description>
                  <b>fulano</b>
                </Description>
              </Infos>
              <Actions>
                <a
                  href={`https://google.com`}
                  title="Abrir página de compra do livro"
                >
                  <FiExternalLink />
                </a>
                <Link
                  to={`/teacher/book/update/${2}`}
                  title="Editar dados de livros"
                >
                  <FiEdit />
                </Link>
              </Actions>
            </FooterBook>
          </Collapse>
        </ItemBook>
      </ListBooks>
      <ButtonWrapper>
        <Button
          color="primary-outline"
          to="/teacher/book/new"
          title="Cadastrar livro"
        >
          Cadastrar livro
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default Book;
