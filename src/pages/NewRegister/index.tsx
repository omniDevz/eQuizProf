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
    firstName: 'Marlito',
    lastName: 'Thomszito',
    cpf: '123.123.123-45',
    dateOfBirth: '1999-12-15',
    email: 'leo@leo.com',
    genre: 'F',
    typeFone: 'C',
    countryCode: '+55',
    ddd: '016',
    number: '912341234',
    cep: '14870260',
    country: '',
    state: 'SP',
    city: 'Bebedouro',
    neighborhood: 'N sei',
    address: 'Av. João Bernardo da Fonseca',
    numberAddress: '868',
    username: 'marlizon',
    password: 'pao',
  };
  const [cep, setCep] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [numberAddress, setNumberAddress] = useState<string>('');

  const history = useHistory();
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(3);
  const [registerConfirm, setRegisterConfirm] = useState<Boolean>(false);

  const { handleChange, values } = useForm(valuesInitials);

  function validationStep(stepValidation: number) {
    switch (stepValidation) {
      case 1:
        if (values.firstName === '') {
          alert('Preencha o primeiro nome');
          return false;
        }
        if (values.lastName === '') {
          alert('Preencha o sobrenome');
          return false;
        }
        if (values.cpf === '') {
          alert('Preencha a CPF');
          return false;
        }
        if (values.dateOfBirth === '') {
          alert('Preencha a data de aniversário');
          return false;
        }
        if (values.genre === '') {
          alert('Selecione seu genêro sexual');
          return false;
        }
        if (values.email === '') {
          alert('Preencha o e-mail');
          return false;
        }
        break;
      case 4:
        if (values.username === '') {
          alert('Preencha o nome de usuário');
          return false;
        }
        if (values.password === '') {
          alert('Preencha a senha do usuário');
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

  function addNewStudent() {
    api
      .post('professor', {
        pessoa: {},
      })
      .then(() => {
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
    setRegisterConfirm(true);
    addNewStudent();
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
          }}
          isPaused={!registerConfirm}
        />
      </ConfirmContainer>
    </PageDefault>
  );
}

export default NewRegister;
