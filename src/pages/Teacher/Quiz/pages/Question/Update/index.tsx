import React from 'react';

import Button from '../../../../../../components/Button';
import FormField from '../../../../../../components/FormField';
import PageTeacher from '../../../../../../components/PageTeacher';
import RadioButton from '../../../../../../components/RadioButton';

import useForm from '../../../../../../hooks/useForm';

import { Form, ButtonsWrapper } from './styled';

const QuestionUpdate: React.FC = () => {
  const valuesInitials = {
    question: '',
    alternativeA: '',
    alternativeB: '',
    alternativeC: '',
    alternativeD: '',
    timeInSeconds: '',
    level: '1',
  };

  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageTeacher type="back" text="Alterar pergunta">
      <Form>
        <FormField
          label="Pergunta"
          name="question"
          value={values.question}
          onChange={handleChange}
        />
        <FormField
          label="Alternativa A"
          name="alternativeA"
          value={values.alternativeA}
          onChange={handleChange}
        />
        <FormField
          label="Alternativa B"
          name="alternativeB"
          value={values.alternativeB}
          onChange={handleChange}
        />
        <FormField
          label="Alternativa C"
          name="alternativeC"
          value={values.alternativeC}
          onChange={handleChange}
        />
        <FormField
          label="Alternativa D"
          name="alternativeD"
          value={values.alternativeD}
          onChange={handleChange}
        />
        <FormField
          label="Tempo em segundos"
          name="timeInSeconds"
          value={values.timeInSeconds}
          onChange={handleChange}
        />
        <RadioButton
          options={[
            {
              label: 'Nível 1',
              value: '1',
            },
            {
              label: 'Nível 2',
              value: '2',
            },
            {
              label: 'Nível 3',
              value: '3',
            },
          ]}
          name="level"
          value={values.level}
          onChange={handleChange}
        />
      </Form>
      <ButtonsWrapper>
        <Button color="primary-outline">Excluir</Button>
        <Button color="primary">Salvar</Button>
      </ButtonsWrapper>
    </PageTeacher>
  );
};

export default QuestionUpdate;
