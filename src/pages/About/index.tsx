import React, { useState } from 'react';
import { MdYoutubeSearchedFor } from 'react-icons/md';
import Collapse from '../../components/Collapse';

import FormField from '../../components/FormField';
import PageDefault from '../../components/PageDefault';

import useForm from '../../hooks/useForm';

import { Container, Title, CollapsesWrapper, Description } from './styled';

const data = [
  {
    id: 1,
    title: 'Como user em aulas?',
    description:
      'Partimos do conceito da metodologia de sala de aula invertida, o aluno estuda a máteria fora da aula, assim tendo apenas dúvidas e a prática em sala de aula.',
  },
  {
    id: 2,
    title: 'O que há de diferente?',
    description:
      'Partimos do conceito da metodologia de sala de aula invertida, o aluno estuda a máteria fora da aula, assim tendo apenas dúvidas e a prática em sala de aula.',
  },
  {
    id: 3,
    title: 'Tem gamificação?',
    description:
      'Partimos do conceito da metodologia de sala de aula invertida, o aluno estuda a máteria fora da aula, assim tendo apenas dúvidas e a prática em sala de aula.',
  },
];

function About() {
  const valuesInitials = {
    search: '',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const [listQuestion, setListQuestion] = useState(data);

  function applySearch() {
    setListQuestion(
      data.filter((question) => question.title.includes(values.search))
    );
  }

  function handleListQuestions(e: React.ChangeEvent<HTMLInputElement>) {
    handleChange(e);
    applySearch();
  }

  return (
    <PageDefault>
      <Container>
        <Title>Por que a English Quiz?</Title>
        <FormField
          label="Pesquisar"
          name="search"
          value={values.search}
          onChange={handleListQuestions}
          stroke="0.5"
          onClick={applySearch}
        >
          <MdYoutubeSearchedFor />
        </FormField>
        <CollapsesWrapper>
          {listQuestion &&
            listQuestion.map(({ id, title, description }) => (
              <Collapse key={id} label={title}>
                <Description>{description}</Description>
              </Collapse>
            ))}
        </CollapsesWrapper>
      </Container>
    </PageDefault>
  );
}

export default About;
