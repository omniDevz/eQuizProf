import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import Button from '../../../components/Button';
import Collapse from '../../../components/Collapse';
import FormField from '../../../components/FormField';
import PageTeacher from '../../../components/PageTeacher';
import RadioButton from '../../../components/RadioButton';
import Select from '../../../components/Select';

import useForm from '../../../hooks/useForm';

import { apiCountries, apiViaCep, apiLocations } from '../../../services/api';

import {
  ButtonsWrapper,
  ThreeColumns,
  TwoColumns,
  TypesFone,
  Fieldset,
  Title,
  Form,
} from './styled';

import {
  AllCountriesProps,
  AllCitiesProps,
  AllStatesProps,
  OptionsSelect,
} from './interface';

const Account: React.FC = () => {
  const valuesInitials = {
    firstName: '',
    lastName: '',
    cpf: '',
    dateOfBirth: '',
    genre: 'M',
    email: '',
    typeFone: 'F',
    countryCode: '',
    ddd: '',
    number: '',
    username: '',
    password: '',
    passwordNew: '',
    passwordNewConfirm: '',
  };

  const { handleChange, values } = useForm(valuesInitials);

  const [cep, setCep] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [numberAddress, setNumberAddress] = useState<string>('');

  const [countries, setCountries] = useState<OptionsSelect>({
    options: [],
  });

  const [states, setStates] = useState<OptionsSelect>({
    options: [
      {
        label: '',
        value: '',
      },
    ],
  });
  const [cities, setCities] = useState<OptionsSelect>({
    options: [
      {
        label: '',
        value: '',
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

        setCountry('Brasil');

        setState(uf);
        if (!validationEmptyValue(uf, 'id_state')) return null;

        setCity(localidade);
        if (!validationEmptyValue(localidade, 'id_city')) return null;

        setNeighborhood(bairro);
        if (!validationEmptyValue(bairro, 'id_neighborhood')) return null;

        setAddress(logradouro);
        if (!validationEmptyValue(logradouro, 'id_address')) return null;

        document.getElementById('id_numberAddress')?.focus();
      })
      .catch(({ response }) => {
        console.error(response);
      });
  }

  useEffect(() => {
    apiCountries
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

  useEffect(() => {
    if (country !== 'Brasil') return;

    apiLocations
      .get('estados')
      .then(({ data }) => {
        const optionsStates = data.map((state: AllStatesProps) => {
          const optionsNameStates = {
            value: state.sigla,
            label: state.sigla,
          };

          return optionsNameStates;
        });

        setStates({
          options: optionsStates,
        });
      })
      .catch(({ response }) => {
        console.error(response);
      });
  }, [country]);

  useEffect(() => {
    if (country !== 'Brasil') return;

    apiLocations
      .get(`estados/${state}/municipios`)
      .then(({ data }) => {
        const optionsCities = data.map((city: AllCitiesProps) => {
          const optionsNameCity = {
            value: city.nome,
            label: city.nome,
          };

          return optionsNameCity;
        });

        setCities({
          options: optionsCities,
        });
      })
      .catch(({ response }) => {
        console.error(response);
      });
  }, [state, country]);

  return (
    <PageTeacher type="icon">
      <Title>Meu perfil</Title>
      <Form>
        <Fieldset>
          <Collapse label="Dados pessoais">
            <TwoColumns>
              <FormField
                label="Nome"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                maxLength={40}
              />
              <FormField
                label="Sobrenome"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                maxLength={40}
              />
            </TwoColumns>
            <TwoColumns>
              <FormField
                label="CPF"
                name="cpf"
                value={values.cpf}
                onChange={handleChange}
                maxLength={14}
              />
              <FormField
                label="Data Nascimento"
                name="dateOfBirth"
                value={values.dateOfBirth}
                onChange={handleChange}
              />
            </TwoColumns>
            <RadioButton
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
              name="genre"
              value={values.genre}
              onChange={handleChange}
            />
            <FormField
              label="E-mail"
              name="email"
              value={values.email}
              onChange={handleChange}
              maxLength={254}
            />
          </Collapse>
        </Fieldset>
        <Fieldset>
          <Collapse label="Telefone">
            <TypesFone>
              <RadioButton
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
                name="typeFone"
                value={values.typeFone}
                onChange={handleChange}
              />
            </TypesFone>
            <ThreeColumns>
              <FormField
                label=""
                name="codeCountry"
                value={values.codeCountry}
                onChange={handleChange}
                prefix="+"
                maxLength={3}
              />
              <FormField
                label="DDD"
                name="ddd"
                value={values.ddd}
                onChange={handleChange}
                maxLength={2}
              />
              <FormField
                label="Número"
                name="number"
                value={values.number}
                onChange={handleChange}
                maxLength={9}
              />
            </ThreeColumns>
          </Collapse>
        </Fieldset>
        <Fieldset>
          <Collapse label="Endereço">
            <FormField
              label="CEP"
              name="cep"
              value={cep}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCep(e.target.value)
              }
              onClick={handleCep}
              maxLength={10}
            >
              <FiSearch />
            </FormField>
            <TwoColumns>
              <Select
                name="country"
                label="País"
                onChange={(e: any) => setCountry(e.value)}
                value={country}
                options={countries.options}
              />
              {country === 'Brasil' ? (
                <Select
                  name="state"
                  label="UF"
                  onChange={(e: any) => setState(e.value)}
                  value={state}
                  options={states.options}
                />
              ) : (
                <FormField
                  label="UF"
                  name="state"
                  value={state}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setState(e.target.value)
                  }
                  maxLength={2}
                />
              )}
            </TwoColumns>
            {country === 'Brasil' ? (
              <Select
                name="city"
                label="Cidade"
                onChange={(e: any) => setCity(e.value)}
                value={city}
                options={cities.options}
              />
            ) : (
              <FormField
                label="Cidade"
                name="city"
                value={city}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCity(e.target.value)
                }
                maxLength={50}
              />
            )}
            <FormField
              label="Bairro"
              name="neighborhood"
              value={neighborhood}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNeighborhood(e.target.value)
              }
              maxLength={50}
            />
            <TwoColumns>
              <FormField
                label="Logradouro"
                name="address"
                value={address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAddress(e.target.value)
                }
                maxLength={80}
              />
              <FormField
                label="Número"
                name="numberAddress"
                value={numberAddress}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNumberAddress(e.target.value)
                }
                maxLength={7}
              />
            </TwoColumns>
          </Collapse>
        </Fieldset>
        <Fieldset>
          <Collapse label="Usuário">
            <FormField
              label="Usuário"
              name="username"
              value={values.username}
              onChange={handleChange}
              maxLength={15}
            />
            <Button color="primary-outline">Alterar usuário</Button>
          </Collapse>
        </Fieldset>
        <Fieldset>
          <Collapse label="Nova senha">
            <FormField
              label="Senha atual"
              name="password"
              value={values.password}
              onChange={handleChange}
              type="password"
              maxLength={32}
            />
            <FormField
              label="Nova senha"
              name="passwordNew"
              value={values.passwordNew}
              onChange={handleChange}
              type="password"
              maxLength={32}
            />
            <FormField
              label="Confirmar senha"
              name="passwordNewConfirm"
              value={values.passwordNewConfirm}
              onChange={handleChange}
              type="password"
              maxLength={32}
            />
            <Button color="primary-outline">Alterar senha</Button>
          </Collapse>
        </Fieldset>
        <ButtonsWrapper>
          <Button color="primary-outline">Excluir</Button>
          <Button color="primary">Salvar</Button>
        </ButtonsWrapper>
      </Form>
    </PageTeacher>
  );
};

export default Account;
