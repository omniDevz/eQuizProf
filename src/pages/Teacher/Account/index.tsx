import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';
import Button from '../../../components/Button';
import Collapse from '../../../components/Collapse';
import FormField from '../../../components/FormField';
import PageTeacher from '../../../components/PageTeacher';
import RadioButton from '../../../components/RadioButton';
import Select from '../../../components/Select';

import api, {
  apiCountries,
  apiViaCep,
  apiLocations,
} from '../../../services/api';

import validation from '../../../utils/validation';
import mask from '../../../utils/mask';
import util from '../../../utils/util';
import { useAuth } from '../../../contexts/auth';

import {
  Title,
  Form,
  Fieldset,
  TwoColumns,
  ThreeColumns,
  TypesFone,
  ButtonsWrapper,
} from './styled';

import {
  AllCountriesProps,
  AllCitiesProps,
  AllStatesProps,
  OptionsSelect,
  ITeacherApi,
  IPersonApi,
} from './interface';

const Account: React.FC = () => {
  const [personId, setPersonId] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [genre, setGenre] = useState('M');
  const [email, setEmail] = useState('');
  const [typePhone, setTypePhone] = useState('F');
  const [countryCode, setCountryCode] = useState('');
  const [ddd, setDdd] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [address, setAddress] = useState('');
  const [numberAddress, setNumberAddress] = useState('');
  const [levelAccess, setLevelAccess] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordNew, setPasswordNew] = useState('');
  const [passwordBack, setPasswordBack] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

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

  const { user, signOut } = useAuth();
  const { addToast } = useToasts();

  function validationEmptyValue(value: string, id: string) {
    if (value !== '') return true;

    document.getElementById(id)?.focus();
    return false;
  }

  function handleCep() {
    if (cep.length < 8) {
      alert('Informe o CEP corretamente');
      return null;
    }

    apiViaCep
      .get(`/${cep.replace('-', '')}/json`)
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
      .get('/estados')
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
      .get(`/estados/${state}/municipios`)
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

  function handleSetPersonByApi(person: IPersonApi) {
    setPersonId(person.pessoaId);
    setFirstName(person.nome);
    setLastName(person.sobrenome);
    setCpf(mask.cpf(person.cpf || ''));
    setBirthDate(util.removeHoursDateTimeApi(person.dataNascimento || ''));
    setGenre(person.sexo || '');
    setEmail(person.email);

    if (person.telefone) {
      const { telefone: phone } = person;
      setTypePhone(phone.tipoTelefone);
      setCountryCode(String(phone.codigoDiscagem));
      setDdd(String(phone.ddd));
      setPhone(String(phone.numeroTelefone));
    }

    if (person.endereco) {
      const { endereco: addressApi } = person;

      setCep(mask.cep(String(addressApi.cep)));
      setAddress(addressApi.logradouro);
      setNeighborhood(addressApi.bairro);
      setCity(addressApi.cidade);
      setState(addressApi.estado);
      setCountry(addressApi.pais);
      setNumberAddress(String(person.numero));
    }

    setUsername(person.usuario);
    setPasswordBack(person.senha);
  }

  useEffect(() => {
    api
      .get(`professor/${user?.teacherId}`)
      .then(({ data }) => {
        const userApi = data as ITeacherApi;

        handleSetPersonByApi(userApi.administrador.pessoa);
        setLevelAccess(userApi.administrador.nivelAcesso);
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado ao obter seus dados, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }, [user, addToast]);

  function handleInstancePersonChangeApi() {
    const applySetPhone =
      countryCode.length > 0 &&
      typePhone.length > 0 &&
      ddd.length > 0 &&
      phone.length > 0;

    const applySetAddress =
      cep.length > 0 &&
      country.length > 0 &&
      state.length > 0 &&
      city.length > 0 &&
      address.length > 0 &&
      numberAddress.length > 0;

    const personApi = {
      pessoaId: personId,
      nome: firstName,
      sobrenome: lastName,
      cpf: util.onlyNumbers(cpf),
      dataNascimento: birthDate,
      sexo: genre,
      email: email,
      telefone: applySetPhone
        ? {
            codigoDiscagem: Number(countryCode),
            ddd: Number(ddd),
            numeroTelefone: Number(phone),
            tipoTelefone: typePhone,
          }
        : null,
      endereco: applySetAddress
        ? {
            cep: Number(util.onlyNumbers(cep)),
            logradouro: address,
            bairro: neighborhood,
            cidade: city,
            estado: state,
            pais: country,
          }
        : null,
      numero: Number(numberAddress),
      usuario: username,
      senha: passwordNew === '' ? passwordBack : passwordNew,
      ultimoUsuarioAlteracao: personId,
    } as IPersonApi;

    return personApi;
  }

  function handleValidationFields() {
    if (firstName === '') {
      addToast('Preencha o primeiro nome', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_firstName')?.focus();
      return false;
    }
    if (lastName === '') {
      addToast('Preencha o sobrenome', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_lastName')?.focus();
      return false;
    }
    if (birthDate === '') {
      addToast('Preencha a data de nascimento', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_birthDate')?.focus();
      return false;
    }
    if (!validation.dateMinToDay(birthDate)) {
      addToast('Preencha a data de nascimento corretamente', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_birthDate')?.focus();
      return false;
    }
    if (email === '') {
      addToast('Preencha o email', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_email')?.focus();
      return false;
    }
    if (!validation.email(email)) {
      addToast('O e-mail deve ser válido', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_email')?.focus();
      return false;
    }
    if (username === '') {
      addToast('Preencha o nome de usuário', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_username')?.focus();
      return false;
    }
    const hasChangePassword =
      passwordNew.length > 0 || passwordConfirm.length > 0;
    const differenceInNewPassword = passwordNew !== passwordConfirm;
    const differenceInOldPassword = password !== passwordBack;

    if (hasChangePassword && passwordNew.length <= 3) {
      addToast('A nova senha deve ter pelo menos 4 caracteres', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_passwordNew')?.focus();

      return false;
    }

    if (hasChangePassword && differenceInOldPassword) {
      addToast('Informe sua atual senha corretamente', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_password')?.focus();

      return false;
    }

    if (hasChangePassword && differenceInNewPassword) {
      addToast('A nova senha e a confirmação deve ser igual', {
        appearance: 'warning',
        autoDismiss: true,
      });
      document.getElementById('id_passwordNew')?.focus();

      return false;
    }

    return true;
  }

  function handleUpdate() {
    if (!handleValidationFields()) return;

    api
      .put('professor', {
        professorId: user?.teacherId,
        ultimoUsuarioAlteracao: personId,
        administrador: {
          administradorId: user?.adminId,
          nivelAcesso: levelAccess,
          ultimoUsuarioAlteracao: personId,
          pessoa: handleInstancePersonChangeApi(),
        },
      })
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        addToast('Dados do perfil alterado com sucesso', {
          appearance: 'success',
          autoDismiss: true,
        });
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na atualização do professor, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  function handleDeleteStudent() {
    if (!window.confirm('Realmente deseja remover sua conta?')) {
      return;
    }

    api
      .delete(`professor/${user?.teacherId}`)
      .then((response) => {
        if (response.status === 206) {
          addToast(response.data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return null;
        }

        addToast('Sua conta foi removida com sucesso', {
          appearance: 'info',
          autoDismiss: true,
        });

        signOut();
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na remoção de sua conta, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

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
                value={firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFirstName(e.target.value)
                }
                maxLength={40}
              />
              <FormField
                label="Sobrenome"
                name="lastName"
                value={lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLastName(e.target.value)
                }
                maxLength={40}
              />
            </TwoColumns>
            <TwoColumns>
              <FormField
                label="CPF"
                name="cpf"
                value={cpf}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCpf(e.target.value)
                }
                maxLength={14}
              />
              <FormField
                label="Aniversário"
                name="birthDate"
                value={birthDate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setBirthDate(e.target.value)
                }
                type="date"
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
              value={genre}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setGenre(e.target.value)
              }
            />
            <FormField
              label="E-mail"
              name="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
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
                name="typePhone"
                value={typePhone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTypePhone(e.target.value)
                }
              />
            </TypesFone>
            <ThreeColumns>
              <FormField
                label=""
                name="countryCode"
                value={countryCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCountryCode(e.target.value)
                }
                prefix="+"
                maxLength={3}
                type="number"
              />
              <FormField
                label="DDD"
                name="ddd"
                value={ddd}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDdd(e.target.value)
                }
                maxLength={2}
                type="number"
              />
              <FormField
                label="Número"
                name="phone"
                value={phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
                maxLength={9}
                type="number"
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
          <Collapse label="Dados de acesso">
            <FormField
              label="Usuário"
              name="username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              maxLength={15}
            />
            <FormField
              label="Senha atual"
              name="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              type="password"
              maxLength={32}
            />
            <FormField
              label="Nova senha"
              name="passwordNew"
              value={passwordNew}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordNew(e.target.value)
              }
              type="password"
              maxLength={32}
            />
            <FormField
              label="Confirmar senha"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordConfirm(e.target.value)
              }
              type="password"
              maxLength={32}
            />
          </Collapse>
        </Fieldset>
        <ButtonsWrapper>
          <Button color="primary-outline" onClick={handleDeleteStudent}>
            Excluir
          </Button>
          <Button color="primary" onClick={handleUpdate}>
            Salvar
          </Button>
        </ButtonsWrapper>
      </Form>
    </PageTeacher>
  );
};

export default Account;
