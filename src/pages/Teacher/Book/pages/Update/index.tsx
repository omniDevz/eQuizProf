import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageTeacher from '../../../../../components/PageTeacher';

import util from '../../../../../utils/util';

import api from '../../../../../services/api';

import { ParamsProps } from './interface';

import { Form, ButtonsWrapper } from './styled';
import { AuthorApiProps, AuthorProps } from '../../../Author/interface';

const BookUpdate: React.FC = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [link, setLink] = useState('');
  const [datePublication, setDatePublication] = useState('');
  const [autorId, setAutorId] = useState(0);
  const [listAuthors, setListAuthors] = useState<AuthorProps[]>([]);

  const { addToast } = useToasts();

  let { bookId } = useParams<ParamsProps>();

  const history = useHistory();

  useEffect(() => {
    api
      .get(`/livro/${bookId}`)
      .then(({ data }) => {
        setTitle(data.titulo);
        setSubtitle(data.subtitulo);
        setLink(data.linkLivro);
        setDatePublication(util.removeHoursDateTimeApi(data.dataPublicacao));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [addToast, bookId]);

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

  function handleUpdateBook() {
    api
      .put('/livro', {
        LivroId: bookId,
        Titulo: title,
        Subtitulo: subtitle,
        LinkLivro: link,
        AutorId: 3,
        DataPublicacao: datePublication,
      })
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Autor alterado com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/teacher/book');
      })
      .catch(({ response }) => {
        const { data } = response;
        addToast(data, {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }

  function handleDeleteBook() {
    api
      .delete(`/livro/${bookId}`)
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Livro removido com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
        history.push('/book');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <PageTeacher type="back" text="Alterar livro">
      <Form>
        <FormField
          label="Título"
          name="title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <FormField
          label="Descrição"
          name="subtitle"
          value={subtitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSubtitle(e.target.value);
          }}
        />
        <FormField
          label="Link"
          name="link"
          value={link}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLink(e.target.value);
          }}
          type="url"
        />
        <FormField
          label="Autor"
          name="author"
          value={'4'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <FormField
          label="Data de publicação"
          name="datePublication"
          value={datePublication}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDatePublication(e.target.value);
          }}
          type="date"
        />
      </Form>
      <ButtonsWrapper>
        <Button color="primary-outline" onClick={handleDeleteBook}>
          Excluir
        </Button>
        <Button color="primary" onClick={handleUpdateBook}>
          Salvar
        </Button>
      </ButtonsWrapper>
    </PageTeacher>
  );
};

export default BookUpdate;
