import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUsers } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageTeacher from '../../../components/PageTeacher';

import useForm from '../../../hooks/useForm';

import api from '../../../services/api';

import {
  ButtonWrapper,
  Descriptions,
  Description,
  Information,
  TwoColumns,
  ListClass,
  ItemClass,
  Title,
  Form,
  Name,
} from './styled';

import { ClassApiProps, ClassProps } from './interface';
import util from '../../../utils/util';
import { useAuth } from '../../../contexts/auth';

const Classes: React.FC = () => {
  const valuesInitials = {
    search: '',
  };
  const { handleChange, values } = useForm(valuesInitials);
  const [listClasses, setListClasses] = useState<ClassProps[]>();

  const { user } = useAuth();

  const { addToast } = useToasts();

  useEffect(() => {
    api
      .get(`movAlunoTurma/professorId/${user?.teacherId}`)
      .then(({ data }) => {
        console.log(data);
        const classFromApi: ClassProps[] = data.map((c: ClassApiProps) => {
          const newClass: ClassProps = {
            classId: c.turma.turmaId,
            name: c.turma.nome,
            description: c.turma.descricao,
            quizzes: c.quantidadeQuizRealizados,
            students: c.quantidadeAlunos,
          };

          return newClass;
        });

        setListClasses(classFromApi);
      })
      .catch((err) => {
        console.error(err);
        addToast('Houve algum erro inesperado, tente novamente mais tarde', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  }, [user, addToast]);

  function handleFilterClasses(c: ClassProps): boolean {
    if (setListClasses.length <= 0) return false;

    return (
      util.includesToLowerCase(c.name, values.search) ||
      util.includesToLowerCase(c.description, values.search)
    );
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
          onChange={handleChange}
        >
          <FiSearch />
        </FormField>
      </Form>
      <ListClass>
        {listClasses &&
          listClasses
            .filter((className) => handleFilterClasses(className))
            .map(({ classId, name, description, quizzes, students }) => (
              <ItemClass key={classId}>
                <Descriptions>
                  <Name>{name}</Name>
                  <Information>{description}</Information>
                  <TwoColumns>
                    <Information>
                      <b>{quizzes}</b> quizzes realizados
                    </Information>
                    |
                    <Information>
                      <b>{students}</b> alunos
                    </Information>
                  </TwoColumns>
                </Descriptions>
                <Link to={`/classes/${classId}`} title="Detalhes da turma">
                  <FiUsers />
                </Link>
              </ItemClass>
            ))}
      </ListClass>
      <ButtonWrapper>
        <Button color="primary">
          <Link to="/classes/new">Nova Turma</Link>
        </Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default Classes;
