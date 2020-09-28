import React, { useState } from 'react';
import { useParams } from 'react-router';
import { FiEdit, FiTrash, FiUser } from 'react-icons/fi';

import FormField from '../../../../../components/FormField';
import PageTeacher from '../../../../../components/PageTeacher';

import useForm from '../../../../../hooks/useForm';

import {
  Header,
  Details,
  Name,
  Code,
  FormFieldWrapper,
  StudantsList,
  StudantItem,
  HeaderStudant,
  Info,
  NameStudant,
  BirthDate,
  Contact,
  ContactItem,
} from './styled';

import { ParamsProps } from './interface';
import { MdYoutubeSearchedFor } from 'react-icons/md';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    name: 'Nome do aluno',
    birthDate: '18/09/1999',
    email: 'nome@gmail.com',
    fone: '+55 (16) 91111-1111',
  },
  {
    id: 2,
    name: 'Nome do aluno',
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
  const [listStudants, setListStudants] = useState(data);

  const { idClass } = useParams<ParamsProps>();

  function applySearch() {
    setListStudants(
      data.filter((studant) => studant.name.includes(values.search))
    );
  }

  function handleListStudant(e: React.ChangeEvent<HTMLInputElement>) {
    handleChange(e);
    applySearch();
  }

  return (
    <PageTeacher type="back" text="Turma">
      <Header>
        <Details>
          <Name>Nome da Turma</Name>
          <Code>#12345</Code>
        </Details>
        <Link
          to={`/teacher/classes/update/${idClass}`}
          title="Alterar nome da turma"
        >
          <FiEdit />
        </Link>
      </Header>

      <FormFieldWrapper>
        <FormField
          label="Pesquisar"
          name="search"
          value={values.search}
          onChange={handleListStudant}
          stroke="0.5"
          onClick={applySearch}
        >
          <MdYoutubeSearchedFor />
        </FormField>
      </FormFieldWrapper>

      <StudantsList>
        {listStudants &&
          listStudants.map((studant) => (
            <StudantItem key={studant.id}>
              <HeaderStudant>
                <FiUser />
                <Info>
                  <NameStudant>{studant.name}</NameStudant>
                  <BirthDate>{studant.birthDate}</BirthDate>
                </Info>
                <FiTrash />
              </HeaderStudant>
              <Contact>
                <ContactItem>{studant.email}</ContactItem>
                <ContactItem>{studant.fone}</ContactItem>
              </Contact>
            </StudantItem>
          ))}
      </StudantsList>
    </PageTeacher>
  );
};

export default ClassesUpdate;
