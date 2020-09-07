import React, { useEffect, useState } from 'react';
import { MdYoutubeSearchedFor } from 'react-icons/md';

import Button from '../../../../components/Button';
import FormField from '../../../../components/FormField';
import Select from '../../../../components/Select';

import { apiLocations, apiViaCep } from '../../../../services/api';

import {
  Container,
  Title,
  Form,
  CEPContainer,
  TwoFields,
  ButtonsWrapper,
} from './styled';

import { StepThreeProps, AllCountriesProps, OptionsSelect } from './interface';

const StepThree: React.FC<StepThreeProps> = ({
  handleStep,
  values,
  setValues,
}) => {
  const [countries, setCountries] = useState<OptionsSelect>({
    options: [
      {
        label: 'Brasil',
        value: 'Brasil',
      },
    ],
  });

  function validationEmptyValue(value: string, id: string) {
    if (value !== '') return true;

    document.getElementById(id)?.focus();
    return false;
  }

  function handleCep() {
    if (values.cep.length < 8) {
      alert('Informe o CEP corretamente');
      return null;
    }

    apiViaCep
      .get(`/${values.cep.replace('-', '')}/json`)
      .then(({ data }) => {
        if (data.erro) {
          alert('Confirme o campo de cep, algo está incorreto');
          return null;
        }

        const { uf, localidade, bairro, logradouro } = data;

        setValues.setCountry('Brasil');
        setValues.setState(uf);
        if (!validationEmptyValue(uf, 'id_state')) return null;

        setValues.setCity(localidade);
        if (!validationEmptyValue(localidade, 'id_city')) return null;

        setValues.setNeighborhood(bairro);
        if (!validationEmptyValue(bairro, 'id_neighborhood')) return null;

        setValues.setAddress(logradouro);
        if (!validationEmptyValue(logradouro, 'id_address')) return null;

        document.getElementById('id_numberAddress')?.focus();
      })
      .catch(({ response }) => {
        console.error(response);
      });
  }

  useEffect(() => {
    apiLocations
      .get('')
      .then(({ data }) => {
        const optionsCountries = data.map((country: AllCountriesProps) => {
          const optionsNameCountryInPortugueseBr = {
            value: country.translations.br,
            label: country.translations.br,
          };

          return optionsNameCountryInPortugueseBr;
        });

        setCountries({
          options: optionsCountries,
        });
      })
      .catch(({ response }) => {
        console.error(response);
      });
  }, []);

  return (
    <Container>
      <Title>Endereço</Title>

      <Form>
        <CEPContainer>
          <FormField
            label="CEP"
            name="cep"
            value={values.cep}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValues.setCep(e.target.value)
            }
            onClick={handleCep}
            stroke="0.5"
          >
            <MdYoutubeSearchedFor />
          </FormField>
        </CEPContainer>
        <TwoFields>
          <Select
            name="country"
            text="País"
            onChange={setValues.setCountry}
            value={values.country}
            options={countries.options}
          />
          {/* <FormField
            label="País"
            name="country"
            value={values.country}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValues.setCountry(e.target.value);
            }}
          /> */}
          <FormField
            label="UF"
            name="state"
            value={values.state}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValues.setState(e.target.value);
            }}
          />
        </TwoFields>
        <FormField
          label="Cidade"
          name="city"
          value={values.city}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValues.setCity(e.target.value)
          }
        />
        <FormField
          label="Bairro"
          name="neighborhood"
          value={values.neighborhood}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValues.setNeighborhood(e.target.value)
          }
        />
        <TwoFields>
          <FormField
            label="Endereço"
            name="address"
            value={values.address}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValues.setAddress(e.target.value)
            }
          />
          <FormField
            label="Nº"
            name="numberAddress"
            value={values.numberAddress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValues.setNumberAddress(e.target.value)
            }
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
