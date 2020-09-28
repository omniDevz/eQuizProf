import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUsers } from 'react-icons/fi';
import { MdYoutubeSearchedFor } from 'react-icons/md';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageTeacher from '../../../components/PageTeacher';

import useForm from '../../../hooks/useForm';

import {
  Title,
  Description,
  Form,
  ListClass,
  ItemClass,
  Descriptions,
  Name,
  Information,
  ButtonWrapper,
} from './styled';

const data = [
  {
    id: 1,
    name: 'Nome da turma',
    quizzes: 6,
    students: 123,
  },
  {
    id: 2,
    name: 'Nome da turma',
    quizzes: 6,
    students: 123,
  },
  {
    id: 3,
    name: 'Nome da turma',
    quizzes: 6,
    students: 123,
  },
  {
    id: 4,
    name: 'Nome da turma',
    quizzes: 6,
    students: 123,
  },
  {
    id: 5,
    name: 'Nome da turma',
    quizzes: 6,
    students: 123,
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
    <PageTeacher type={'icon'}>
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
          listClasses.map(({ id, name, quizzes, students }) => (
            <ItemClass key={id}>
              <Descriptions>
                <Name>{name}</Name>
                <Information>
                  <b>{quizzes}</b> quizzes realizados
                </Information>
                <Information>
                  <b>{students}</b> alunos
                </Information>
              </Descriptions>
              <FiUsers />
            </ItemClass>
          ))}
      </ListClass>
      <ButtonWrapper>
        <Button color="primary">
          <Link to="/teacher/classesNew">Nova Turma</Link>
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default Classes;
