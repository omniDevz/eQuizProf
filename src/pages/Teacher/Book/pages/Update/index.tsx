import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { FiUserPlus, FiUsers } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';

import Select from '../../../../../components/Select';
import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageTeacher from '../../../../../components/PageTeacher';

import util from '../../../../../utils/util';

import api from '../../../../../services/api';

import { Form, ButtonsWrapper, InputAndButton } from './styled';

import { ParamsProps } from './interface';
import { AuthorApiProps } from '../../../Author/interface';
import { ISelectOptions } from '../../../../../components/Select/interface';

const BookUpdate: React.FC = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [link, setLink] = useState('');
  const [datePublication, setDatePublication] = useState('');
  const [authorId, setAuthorId] = useState(0);
  const [firstNameAuthor, setFirstNameAuthor] = useState('');
  const [lastNameAuthor, setLastNameAuthor] = useState('');
  const [listAuthorsOptions, setListAuthorsOptions] = useState<
    ISelectOptions[]
  >([]);
  const [addAuthor, setAddAuthor] = useState(false);

  const history = useHistory();
  const { addToast } = useToasts();

  let { bookId } = useParams<ParamsProps>();

  useEffect(() => {
    api
      .get('/autor')
      .then(({ data }) => {
        const authorFromApi: ISelectOptions[] = data.map(
          (author: AuthorApiProps) => {
            const newAuthor: ISelectOptions = {
              value: String(author.autorId),
              label: `${author.nome} ${author.sobrenome}`,
            };

            return newAuthor;
          }
        );

        setListAuthorsOptions(authorFromApi);
      })
      .catch((err) => {
        console.error(err);
        addToast(
          'Houve algum erro inesperado na busca pelos autores, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [addToast]);

  useEffect(() => {
    api
      .get(`/livro/${bookId}`)
      .then(({ data }) => {
        setTitle(data.titulo);
        setSubtitle(data.subtitulo);
        setLink(data.linkLivro);
        setAuthorId(data.autor.autorId);
        setDatePublication(util.removeHoursDateTimeApi(data.dataPublicacao));
      })
      .catch((err) => {
        console.error(err);
        addToast(
          'Houve algum erro inesperado na busca pelos livros, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [addToast, bookId]);

  function handleUpdateBook() {
    api
      .put('/livro', {
        livroId: bookId,
        titulo: title,
        subtitulo: subtitle,
        linkLivro: link,
        autorId: authorId,
        autor: addAuthor
          ? {
              nome: firstNameAuthor,
              sobrenome: lastNameAuthor,
            }
          : null,
        dataPublicacao: datePublication,
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
        history.push('/book');
      })
      .catch((err) => {
        console.error(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
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
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
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
          maxLength={50}
        />
        <FormField
          label="Descrição"
          name="subtitle"
          value={subtitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSubtitle(e.target.value);
          }}
          maxLength={50}
        />
        <FormField
          label="Link"
          name="link"
          value={link}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLink(e.target.value);
          }}
          type="url"
          maxLength={500}
        />
        <InputAndButton>
          {addAuthor ? (
            <FormField
              label="Nome Autor"
              name="firstNameAuthor"
              value={firstNameAuthor}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFirstNameAuthor(e.target.value);
              }}
              maxLength={50}
            />
          ) : (
            <Select
              name="authorId"
              label="Autor"
              onChange={(e: any) => setAuthorId(e.value)}
              value={String(authorId)}
              options={listAuthorsOptions}
            />
          )}

          <Button color="primary" onClick={() => setAddAuthor(!addAuthor)}>
            {addAuthor ? <FiUserPlus /> : <FiUsers />}
          </Button>
        </InputAndButton>
        {addAuthor && (
          <FormField
            label="Sobrenome Autor"
            name="lastNameAuthor"
            value={lastNameAuthor}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLastNameAuthor(e.target.value);
            }}
            maxLength={50}
          />
        )}
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
