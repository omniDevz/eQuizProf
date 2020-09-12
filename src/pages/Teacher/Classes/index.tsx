import React, { useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import { MdYoutubeSearchedFor } from 'react-icons/md';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefaultProf from '../../../components/PageDefaultProf';

import useForm from '../../../hooks/useForm';

import {
  Title,
  Description,
  Form,
  ListClass,
  ItemClass,
  Informations,
  Name,
  Information,
  ButtonWrapper,
} from './styled';

const data = [
  {
    id: 1,
    name: 'Nome da turma',
    quizzes: 6,
    studants: 123,
  },
  {
    id: 2,
    name: 'Nome da turma',
    quizzes: 6,
    studants: 123,
  },
  {
    id: 3,
    name: 'Nome da turma',
    quizzes: 6,
    studants: 123,
  },
  {
    id: 4,
    name: 'Nome da turma',
    quizzes: 6,
    studants: 123,
  },
];

const Classes: React.FC = () => {
  const valuesInitials = {
    search: '',
  };
  const { handleChange, values } = useForm(valuesInitials);
  const [listClasses, setListClasses] = useState(data);

  function applySearch() {
    setListClasses(
      data.filter((classes) => classes.name.includes(values.search))
    );
  }

  function handleListClasses(e: React.ChangeEvent<HTMLInputElement>) {
    handleChange(e);
    applySearch();
  }

  return (
    <PageDefaultProf type={'icon'}>
      <Title>Turmas</Title>
      <Description>Consulte e administre suas turmas</Description>
      <Form>
        <FormField
          label="Pesquisar"
          name="search"
          value={values.search}
          onChange={handleListClasses}
          stroke="0.5"
          onClick={applySearch}
        >
          <MdYoutubeSearchedFor />
        </FormField>
      </Form>
      <ListClass>
        {listClasses &&
          listClasses.map(({ id, name, quizzes, studants }) => (
            <ItemClass key={id}>
              <Informations>
                <Name>{name}</Name>
                <Information>
                  <b>{quizzes}</b> quizzes realizados
                </Information>
                <Information>
                  <b>{studants}</b> alunos
                </Information>
              </Informations>
              <FiUsers />
            </ItemClass>
          ))}
      </ListClass>
      <ButtonWrapper>
        <Button color="primary">Nova Turma</Button>
      </ButtonWrapper>
    </PageDefaultProf>
  );
};

export default Classes;
