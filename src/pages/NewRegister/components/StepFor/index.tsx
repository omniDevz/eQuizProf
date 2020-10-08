import React from 'react';

import FormField from '../../../../components/FormField';
import Button from '../../../../components/Button';

import {
  ButtonsWrapper,
  Description,
  Container,
  Fields,
  Title,
  Form,
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
        <Fields>
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
          <FormField
            label="Confirme a senha"
            name="passwordConfirma"
            value={values.passwordConfirm}
            onChange={handleChange}
            type="password"
          />
        </Fields>

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
