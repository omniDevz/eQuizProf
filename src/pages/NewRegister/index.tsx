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
        if (values.cpf.length !== 14) {
          alert('Quantidade de caracteres inválido no cpf');
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
              Ddd: values.ddd.slice(),
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
