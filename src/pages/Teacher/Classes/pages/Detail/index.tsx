import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash, FiUser, FiSearch } from 'react-icons/fi';

import FormField from '../../../../../components/FormField';
import PageTeacher from '../../../../../components/PageTeacher';

import useForm from '../../../../../hooks/useForm';

import api from '../../../../../services/api';

import {
  FormFieldWrapper,
  HeaderStudent,
  StudentsList,
  Description,
  StudentItem,
  NameStudent,
  ContactItem,
  BirthDate,
  Details,
  Contact,
  Header,
  Name,
  Code,
  Info,
} from './styled';

import { ClassApiProps, ClassProps } from '../../interface';
import { ParamsProps, StudentProps } from './interface';
import { useToasts } from 'react-toast-notifications';
import util from '../../../../../utils/util';

const data: StudentProps[] = [
  {
    id: 1,
    name: 'Nome do aluno',
    birthDate: '18/09/1999',
    email: 'nome@gmail.com',
    fone: '+55 (16) 91111-1111',
  },
  {
    id: 2,
    name: 'tes',
    birthDate: '18/09/1999',
    email: 'nome@gmail.com',
    fone: '+55 (16) 91111-1111',
  },
  {
    id: 3,
    name: 'Nome do aluno',
    birthDate: '18/09/1999',
    email: 'nome@gmail.com',
    fone: '+55 (16) 91111-1111',
  },
];

const ClassesUpdate: React.FC = () => {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const [listStudents, setListStudents] = useState(data);
  const [classDetail, setClassDetail] = useState<ClassProps>({
    description: '',
    name: '',
    code: '',
  });

  const { idClass } = useParams<ParamsProps>();

  const { addToast } = useToasts();

  useEffect(() => {
    api
      .get(`/turma/${idClass}`)
      .then(({ data }) => {
        const classFromApi: ClassProps = {
          name: data.nome,
          description: data.descricao,
          code: data.codigo,
          quizzes: 0,
          students: 0,
        };

        setClassDetail(classFromApi);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [idClass, addToast]);

  function handleListStudents(student: StudentProps) {
    return (
      util.includesToLowerCase(student.name, values.search) ||
      util.includesToLowerCase(student.email, values.search)
    );
  }

  return (
    <PageTeacher type="back" text="Turma">
      <Header>
        <Details>
          <Name>{classDetail.name}</Name>
          <Description>{classDetail.description}</Description>
          <Code>#{classDetail.code}</Code>
        </Details>
        <Link
          to={`/teacher/classes/update/${idClass}`}
          title="Alterar dados da turma"
        >
          <FiEdit />
        </Link>
      </Header>

      <FormFieldWrapper>
        <FormField
          label="Pesquisar"
          name="search"
          value={values.search}
          onChange={handleChange}
        >
          <FiSearch />
        </FormField>
      </FormFieldWrapper>

      <StudentsList>
        {listStudents &&
          listStudents
            .filter((student) => handleListStudents(student))
            .map((Student) => (
              <StudentItem key={Student.id}>
                <HeaderStudent>
                  <FiUser />
                  <Info>
                    <NameStudent>{Student.name}</NameStudent>
                    <BirthDate>{Student.birthDate}</BirthDate>
                  </Info>
                  <FiTrash />
                </HeaderStudent>
                <Contact>
                  <ContactItem>{Student.email}</ContactItem>|
                  <ContactItem>{Student.fone}</ContactItem>
                </Contact>
              </StudentItem>
            ))}
      </StudentsList>
    </PageTeacher>
  );
};

export default ClassesUpdate;
