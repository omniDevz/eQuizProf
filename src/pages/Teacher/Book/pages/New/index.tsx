import React from 'react';
import { useHistory } from 'react-router';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../../../components/Button';
import FormField from '../../../../../components/FormField';
import PageTeacher from '../../../../../components/PageTeacher';

import useForm from '../../../../../hooks/useForm';
import api from '../../../../../services/api';

import { Form, ButtonWrapper } from './styled';

const BookNew: React.FC = () => {
  const valuesInitials = {
    datePublication: '',
    description: '',
    author: '',
    title: '',
    link: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  const { addToast } = useToasts();
  const history = useHistory();

  function handleRegisterBook() {
    api
      .post('/livro', {
        Titulo: values.title,
        Subtitulo: values.description,
        LinkLivro: values.link,
        AutorId: 4,
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
        <Button color="primary" onClick={handleRegisterBook}>
          Salvar
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default BookNew;
