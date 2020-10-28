import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiExternalLink, FiSearch } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import Collapse from '../../../components/Collapse';
import FormField from '../../../components/FormField';
import PageTeacher from '../../../components/PageTeacher';
import useForm from '../../../hooks/useForm';

import api from '../../../services/api';

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

import { BookApiProps, BookProps } from './interface';
import util from '../../../utils/util';

const Book: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  const [listBooks, setListBooks] = useState<BookProps[]>([]);

  const { addToast } = useToasts();

  useEffect(() => {
    api
      .get('/livro')
      .then(({ data }) => {
        const bookFromApi: BookProps[] = data.map((book: BookApiProps) => {
          const newBook: BookProps = {
            bookId: book.livroId,
            author: {
              authorId: book.autor.autorId,
              firstName: book.autor.nome,
              lastName: book.autor.sobrenome,
            },
            title: book.titulo,
            subtitle: book.subtitulo,
            link: book.linkLivro,
            datePublication: book.dataPublicacao,
          };

          return newBook;
        });

        setListBooks(bookFromApi);
      })
      .catch(({ response }) => {
        const { data } = response;
        addToast(data, {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }, [addToast]);

  function filterSearchOnBooks(book: BookProps) {
    return util.includesToArray(
      [book.title, book.subtitle, book.author.firstName, book.author.lastName],
      values.search
    );
  }

  return (
    <PageTeacher type="back" text="Livros">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={values.search}
          onChange={handleChange}
          maxLength={100}
        >
          <FiSearch />
        </FormField>
      </Form>
      <ListBooks>
        {listBooks.length > 0 &&
          listBooks
            .filter((book) => filterSearchOnBooks(book))
            .map((book) => (
              <ItemBook key={book.bookId}>
                <Collapse label={book.title}>
                  <Description>{book.subtitle}</Description>
                  <FooterBook>
                    <Infos>
                      <Description>
                        <b>{`${book.author.firstName} ${book.author.lastName}`}</b>
                      </Description>
                    </Infos>
                    <Actions>
                      <a
                        href={book.link}
                        title="Abrir página de compra do livro"
                      >
                        <FiExternalLink />
                      </a>
                      <Link
                        to={`/book/update/${book.bookId}`}
                        title="Editar dados de livros"
                      >
                        <FiEdit />
                      </Link>
                    </Actions>
                  </FooterBook>
                </Collapse>
              </ItemBook>
            ))}
      </ListBooks>
      <ButtonWrapper>
        <Button color="primary-outline" to="/book/new" title="Cadastrar livro">
          Cadastrar livro
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default Book;
