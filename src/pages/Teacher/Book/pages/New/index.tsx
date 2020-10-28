import React, { useEffect, useState } from 'react';
import { FiUserPlus, FiUsers } from 'react-icons/fi';
import { useHistory } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageTeacher from '../../../../../components/PageTeacher';
import Select from '../../../../../components/Select';

import useForm from '../../../../../hooks/useForm';
import api from '../../../../../services/api';

import { Form, ButtonWrapper, InputAndButton } from './styled';

import { ISelectOptions } from '../../../../../components/Select/interface';
import { AuthorApiProps } from '../../../Author/interface';

const BookNew: React.FC = () => {
  const valuesInitials = {
    datePublication: '',
    description: '',
    title: '',
    link: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  const [authorId, setAuthorId] = useState('');
  const [firstNameAuthor, setFirstNameAuthor] = useState('');
  const [lastNameAuthor, setLastNameAuthor] = useState('');
  const [listAuthorsOptions, setListAuthorsOptions] = useState<
    ISelectOptions[]
  >([]);
  const [addAuthor, setAddAuthor] = useState(true);

  const { addToast } = useToasts();
  const history = useHistory();

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

  function handleRegisterBook() {
    api
      .post('/livro', {
        Titulo: values.title,
        Subtitulo: values.description,
        LinkLivro: values.link,
        autorId: authorId,
        autor: addAuthor
          ? {
              nome: firstNameAuthor,
              sobrenome: lastNameAuthor,
            }
          : null,
        DataPublicacao: values.datePublication,
      })
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Livro cadastrado com sucesso', {
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
    <PageTeacher type="back" text="Novo livro">
      <Form>
        <FormField
          label="Título"
          name="title"
          value={values.title}
          onChange={handleChange}
          maxLength={50}
        />
        <FormField
          label="Descrição"
          name="description"
          value={values.description}
          onChange={handleChange}
          maxLength={50}
        />
        <FormField
          label="Link"
          name="link"
          value={values.link}
          onChange={handleChange}
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
              label="Autores"
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
          value={values.datePublication}
          onChange={handleChange}
          type="date"
        />
      </Form>
      <ButtonWrapper>
        <Button color="primary" onClick={handleRegisterBook}>
          Salvar
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default BookNew;
