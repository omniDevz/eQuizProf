import React from 'react';

import FormField from '../../../../components/FormField';
import Button from '../../../../components/Button';
import RadioButton from '../../../../components/RadioButton';

import {
  Container,
  FieldsWrapper,
  ContainerRadiosButtons,
  Title,
  Form,
  ThreeColumns,
  ButtonsWrapper,
} from './styled';

import { StepTwoProps } from './interface';

const StepTwo: React.FC<StepTwoProps> = ({
  values,
  handleChange,
  handleStep,
}) => {
  return (
    <Container>
      <Title>Telefone</Title>
      <Form>
        <FieldsWrapper>
          <ContainerRadiosButtons>
            <RadioButton
              name="typeFone"
              options={[
                {
                  label: 'Fixo',
                  value: 'F',
                },
                {
                  label: 'Celular',
                  value: 'C',
                },
              ]}
              onChange={handleChange}
              value={values.typeFone}
            />
          </ContainerRadiosButtons>
          <ThreeColumns>
            <FormField
              label=""
              name="countryCode"
              value={values.countryCode}
              onChange={handleChange}
              prefix="+"
            />
            <FormField
              label=""
              name="ddd"
              value={values.ddd}
              onChange={handleChange}
              type="number"
              prefix="0"
            />
            <FormField
              label="Número"
              name="number"
              value={values.number}
              onChange={handleChange}
              type="number"
            />
          </ThreeColumns>
        </FieldsWrapper>

        <ButtonsWrapper>
          <Button onClick={() => handleStep(2, 3)} color="primary">
            Continuar
          </Button>
          <Button onClick={() => handleStep(2, 1)} color="primary-outline">
            Voltar
          </Button>
        </ButtonsWrapper>
      </Form>
    </Container>
  );
};

export default StepTwo;
