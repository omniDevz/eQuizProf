import React, { useState } from 'react';

import Button from '../../../../../../components/Button';
import CheckButton from '../../../../../../components/CheckButton';
import FormField from '../../../../../../components/FormField';
import PageTeacher from '../../../../../../components/PageTeacher';

import useForm from '../../../../../../hooks/useForm';

import { Form, ButtonWrapper } from './styled';

const SlideNew: React.FC = () => {
  const valuesInitials = {
    text: '',
    timeInSeconds: '0',
  };

  const [hasTime, setHasTime] = useState(false);
  const { handleChange, values } = useForm(valuesInitials);

  return (
    <PageTeacher type="back" text="Novo slide">
      <Form>
        <FormField
          label="Frase"
          name="text"
          value={values.text}
          onChange={handleChange}
        />
        <CheckButton
          label="Slide com tempo"
          name="hasTime"
          value={hasTime}
          setValue={setHasTime}
        />
        {hasTime && (
          <FormField
            label="Tempo em segundos"
            name="timeInSeconds"
            value={values.timeInSeconds}
            onChange={handleChange}
            type="number"
          />
        )}
      </Form>
      <ButtonWrapper>
        <Button color="primary">Salvar</Button>
      </ButtonWrapper>
    </PageTeacher>
  );
};

export default SlideNew;
