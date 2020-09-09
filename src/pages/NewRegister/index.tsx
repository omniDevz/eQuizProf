import React, { useState } from 'react';
import Lottie from 'lottie-react-web';
import { useHistory } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFor from './components/StepFor';
import StepFive from './components/StepFive';

import useForm from '../../hooks/useForm';

import lottieAccept from '../../assets/lottie/accept.json';

import { Steps, ConfirmContainer } from './styled';

import api from '../../services/api';

function NewRegister() {
  const valuesInitials = {
    firstName: '',
    lastName: '',
    cpf: '',
    dateOfBirth: '',
    email: '',
    genre: 'M',
    typeFone: 'C',
    countryCode: '',
    ddd: '',
    number: '',
    username: '',
    password: '',
  };
  const [cep, setCep] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [numberAddress, setNumberAddress] = useState<string>('');

  const history = useHistory();
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [registerConfirm, setRegisterConfirm] = useState<Boolean>(false);

  const { handleChange, values } = useForm(valuesInitials);

  function validationStep(stepValidation: number) {
    switch (stepValidation) {
      case 1:
        if (values.firstName === '') {
          alert('Preencha o primeiro nome');
          document.getElementById('id_firstName')?.focus();
          return false;
        }
        if (values.firstName.length <= 2) {
          alert('Primeiro nome deve conter no mínimo três caracteres');
          document.getElementById('id_firstName')?.focus();
          return false;
        }
        if (values.lastName === '') {
          alert('Preencha o sobrenome');
          document.getElementById('id_lastName')?.focus();
          return false;
        }
        if (values.cpf === '') {
          alert('Preencha a CPF');
          document.getElementById('id_cpf')?.focus();
          return false;
        }
        if (values.cpf.length !== 11) {
          alert('Informe seu CPF corretamente');
          document.getElementById('id_cpf')?.focus();
          return false;
        }
        if (values.dateOfBirth === '') {
          alert('Preencha a data de aniversário');
          document.getElementById('id_dateOfBirth')?.focus();
          return false;
        }
        if (values.genre === '') {
          alert('Selecione seu genêro sexual');
          return false;
        }
        if (values.email === '') {
          alert('Preencha o e-mail');
          document.getElementById('id_email')?.focus();
          return false;
        }
        break;
      case 2:
        const anyFieldHasValueInFone = Boolean(
          values.countryCode.length + values.ddd.length + values.number.length
        );

        if (!anyFieldHasValueInFone) return true;

        if (values.countryCode === '') {
          alert('Preencha o código de discagem');
          document.getElementById('id_countryCode')?.focus();
          return false;
        }
        if (values.ddd === '') {
          alert('Preencha o DDD');
          document.getElementById('id_ddd')?.focus();
          return false;
        }
        if (values.number === '') {
          alert('Preencha o número de telefone');
          document.getElementById('id_number')?.focus();
          return false;
        }
        break;
      case 3:
        const anyFieldContainValueInAddress = Boolean(
          cep.length +
            country.length +
            state.length +
            city.length +
            neighborhood.length +
            address.length +
            numberAddress.length
        );

        if (!anyFieldContainValueInAddress) return true;

        if (cep === '') {
          alert('Preencha o CEP');
          document.getElementById('id_cep')?.focus();
          return false;
        }
        if (country === '') {
          alert('Preencha o país');
          document.getElementById('id_country')?.focus();
          return false;
        }
        if (state === '') {
          alert('Preencha o estado');
          document.getElementById('id_state')?.focus();
          return false;
        }
        if (city === '') {
          alert('Preencha a cidade');
          document.getElementById('id_city')?.focus();
          return false;
        }
        if (neighborhood === '') {
          alert('Preencha o bairro');
          document.getElementById('id_neighborhood')?.focus();
          return false;
        }
        if (address === '') {
          alert('Preencha o endereço');
          document.getElementById('id_address')?.focus();
          return false;
        }
        if (numberAddress === '') {
          alert('Preencha o número do endereço');
          document.getElementById('id_numberAddress')?.focus();
          return false;
        }
        break;
      case 4:
        if (values.username === '') {
          alert('Preencha o nome de usuário');
          document.getElementById('id_username')?.focus();
          return false;
        }
        if (values.password === '') {
          alert('Preencha a senha do usuário');
          document.getElementById('id_password')?.focus();
          return false;
        }
        break;
    }

    return true;
  }

  function handleStep(step: 1 | 2 | 3 | 4 | 5, to: 1 | 2 | 3 | 4 | 5) {
    if (step < to && !validationStep(step)) return null;

    setStep(to);
    return null;
  }

  function addNewTeacher() {
    api
      .post('/professor', {
        administrador: {
          pessoa: {
            nome: values.firstName,
            sobrenome: values.lastname,
            cpf: values.cpf,
            dataNascimento: values.dateOfBirth,
            sexo: values.genre,
            numero: numberAddress,
            usuario: values.username,
            senha: values.password,
            telefone: {
              CodigoDiscagem: values.countryCode.replace('+', ''),
              Ddd: values.ddd.slice(-2),
              NumeroTelefone: values.number,
              TipoTelefone: values.typeFone,
            },
            endereco: {
              Cep: cep,
              Logradouro: address,
              Bairro: neighborhood,
              Cidade: city,
              Estado: state,
              Pais: country,
            },
            email: values.email,
          },
        },
      })
      .then((response) => {
        if (response.status === 409) {
          alert(response.data);
          return;
        }

        setRegisterConfirm(true);

        setTimeout(() => {
          setRegisterConfirm(false);

          history.push('/teacher/home');
        }, 3600);
      })
      .catch(({ response }) => {
        const { data } = response;
        alert(data);
      });
  }

  function handleConfirmRegister() {
    addNewTeacher();
  }

  return (
    <PageDefault>
      <Steps step={step}>
        <StepOne
          handleChange={handleChange}
          handleStep={handleStep}
          values={values}
        />
        <StepTwo
          handleChange={handleChange}
          handleStep={handleStep}
          values={values}
        />
        <StepThree
          handleStep={handleStep}
          values={{
            cep,
            country,
            state,
            city,
            neighborhood,
            address,
            numberAddress,
          }}
          setValues={{
            setCep,
            setCountry,
            setState,
            setCity,
            setNeighborhood,
            setAddress,
            setNumberAddress,
          }}
        />
        <StepFor
          handleChange={handleChange}
          handleStep={handleStep}
          values={values}
        />
        <StepFive
          handleConfirmRegister={handleConfirmRegister}
          handleStep={handleStep}
        />
      </Steps>
      <ConfirmContainer registerConfirm={registerConfirm}>
        <Lottie
          options={{
            animationData: lottieAccept,
            autoplay: true,
          }}
        />
      </ConfirmContainer>
    </PageDefault>
  );
}

export default NewRegister;
