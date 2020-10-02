import React from 'react';

import FormField from '../../../../components/FormField';
import Button from '../../../../components/Button';
import RadioButton from '../../../../components/RadioButton';

import mask from '../../../../utils/mask';

import {
  Container,
  Title,
  Description,
  Form,
  TwoColumns,
  LinkLogin,
} from './styled';

import { StepOneProps } from './interface';

const StepOne: React.FC<StepOneProps> = ({
  values,
  setValues,
  cpf,
  handleChange,
  handleStep,
}) => {
  function handleCep(e: React.ChangeEvent<HTMLInputElement>) {
    const cpfOnMask = mask.cpf(e.target.value);
    setValues.setCpf(cpfOnMask);
  }

  return (
    <Container>
      <Title>Cadastre-se</Title>
      <Description>
        Venha fazer parte da nossa história, faça parte da English Quiz!
      </Description>
      <Form>
        <TwoColumns>
          <FormField
            label="Nome"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          <FormField
            label="Sobrenome"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </TwoColumns>
        <TwoColumns>
          <FormField label="CPF" name="cpf" value={cpf} onChange={handleCep} />
          <FormField
            label="Nascimento"
            name="dateOfBirth"
            value={values.dateOfBirth}
            onChange={handleChange}
            type="date"
          />
        </TwoColumns>
        <RadioButton
          name="genre"
          options={[
            {
              label: 'Masculino',
              value: 'M',
            },
            {
              label: 'Feminino',
              value: 'F',
            },
            {
              label: 'Outro',
              value: 'O',
            },
          ]}
          onChange={handleChange}
          value={values.genre}
        />
        <FormField
          label="E-mail"
          name="email"
          value={values.email}
          onChange={handleChange}
          type="email"
        />
        <Button onClick={() => handleStep(1, 2)} color="primary">
          Continuar
        </Button>
      </Form>
      <LinkLogin to="/login" title="Faça o login">
        Possui cadastro? <b>Faça o login</b>
      </LinkLogin>
    </Container>
  );
};

export default StepOne;
