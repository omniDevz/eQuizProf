import React from 'react';

import Button from '../../../../components/Button';
import FormField from '../../../../components/FormField';

import {
  Container,
  Title,
  Form,
  CEPContainer,
  TwoFields,
  ButtonsWrapper,
} from './styled';

import { StepThreeProps } from './interface';

const StepThree: React.FC<StepThreeProps> = ({
  handleChange,
  handleStep,
  values,
}) => {
  return (
    <Container>
      <Title>Endereço</Title>

      <Form>
        <CEPContainer>
          <FormField
            label="CEP"
            name="cep"
            value={values.cep}
            onChange={handleChange}
          />
        </CEPContainer>
        <TwoFields>
          <FormField
            label="País"
            name="country"
            value={values.country}
            onChange={handleChange}
          />
          <FormField
            label="UF"
            name="state"
            value={values.state}
            onChange={handleChange}
          />
        </TwoFields>
        <FormField
          label="Cidade"
          name="city"
          value={values.city}
          onChange={handleChange}
        />
        <FormField
          label="Bairro"
          name="neighborhood"
          value={values.neighborhood}
          onChange={handleChange}
        />
        <TwoFields>
          <FormField
            label="Endereço"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
          <FormField
            label="Nº"
            name="numberAddress"
            value={values.numberAddress}
            onChange={handleChange}
          />
        </TwoFields>
      </Form>

      <ButtonsWrapper>
        <Button onClick={() => handleStep(3, 4)} color="primary">
          Continuar
        </Button>
        <Button onClick={() => handleStep(3, 2)} color="primary-outline">
          Voltar
        </Button>
      </ButtonsWrapper>
    </Container>
  );
};

export default StepThree;
