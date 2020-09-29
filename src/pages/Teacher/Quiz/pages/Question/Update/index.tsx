import React from 'react';

import Button from '../../../../../../components/Button';
import FormField from '../../../../../../components/FormField';
import PageTeacher from '../../../../../../components/PageTeacher';
import RadioButton from '../../../../../../components/RadioButton';
import FieldRadioButton from '../../../components/FieldRadioButton';

import useForm from '../../../../../../hooks/useForm';

import { Form, ButtonsWrapper } from './styled';

const QuestionUpdate: React.FC = () => {
  const valuesInitials = {
    level: '1',
    question: '',
    alternativeA: '',
    alternativeB: '',
    alternativeC: '',
    alternativeD: '',
    timeInSeconds: '',
    alternativeRight: 'A',
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
        <FieldRadioButton
          text="Alternativa A"
          name="alternativeA"
          value={values.alternativeA}
          setValue={handleChange}
          check={{
            name: 'alternativeRight',
            value: 'A',
            checked: values.alternativeRight,
          }}
        />
        <FieldRadioButton
          text="Alternativa B"
          name="alternativeB"
          value={values.alternativeB}
          setValue={handleChange}
          check={{
            name: 'alternativeRight',
            value: 'B',
            checked: values.alternativeRight,
          }}
        />
        <FieldRadioButton
          text="Alternativa C"
          name="alternativeC"
          value={values.alternativeC}
          setValue={handleChange}
          check={{
            name: 'alternativeRight',
            value: 'C',
            checked: values.alternativeRight,
          }}
        />
        <FieldRadioButton
          text="Alternativa D"
          name="alternativeD"
          value={values.alternativeD}
          setValue={handleChange}
          check={{
            name: 'alternativeRight',
            value: 'D',
            checked: values.alternativeRight,
          }}
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
