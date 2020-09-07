import React from 'react';

import FormField from '../../../../components/FormField';
import Button from '../../../../components/Button';

import {
  Container,
  Title,
  Description,
  Form,
  TwoColumns,
  ButtonsWrapper,
} from './styled';

import { StepForProps } from './interface';

const StepFor: React.FC<StepForProps> = ({
  values,
  handleChange,
  handleStep,
}) => {
  return (
    <Container>
      <Title>Dados de acesso</Title>
      <Description>Usuário e senha para o acesso</Description>
      <Form>
        <TwoColumns>
          <FormField
            label="Usuário"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <FormField
            label="Senha"
            name="password"
            value={values.password}
            onChange={handleChange}
            type="password"
          />
        </TwoColumns>

        <ButtonsWrapper>
          <Button onClick={() => handleStep(4, 5)} color="primary">
            Continuar
          </Button>
          <Button onClick={() => handleStep(4, 3)} color="primary-outline">
            Voltar
          </Button>
        </ButtonsWrapper>
      </Form>
    </Container>
  );
};

export default StepFor;
