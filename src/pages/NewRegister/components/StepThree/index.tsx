import React from 'react';
import { MdYoutubeSearchedFor } from 'react-icons/md';

import Button from '../../../../components/Button';
import FormField from '../../../../components/FormField';

import { apiViaCep } from '../../../../services/api';

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
  function handleCep() {
    apiViaCep
      .get(`/${values.cep.replace('-', '')}/json`)
      .then(({ data }) => {
        if (data.erro) {
          alert('Confirme o campo de cep, algo está incorreto');
          return null;
        }

        console.log(data);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }

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
            onClick={handleCep}
            stroke="0.5"
          >
            <MdYoutubeSearchedFor />
          </FormField>
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
