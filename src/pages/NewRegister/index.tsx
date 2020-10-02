import React, { useState } from 'react';
import Lottie from 'lottie-react-web';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import PageDefault from '../../components/PageDefault';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFor from './components/StepFor';
import StepFive from './components/StepFive';

import useForm from '../../hooks/useForm';

import util from '../../utils/util';

import lottieAccept from '../../assets/lottie/accept.json';

import { Steps, ConfirmContainer } from './styled';

import api from '../../services/api';

function NewRegister() {
  const valuesInitials = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    genre: 'M',
    typeFone: 'C',
    countryCode: '55',
    ddd: '',
    number: '',
    username: '',
    password: '',
  };
  const [cpf, setCpf] = useState<string>('');
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
  const { addToast } = useToasts();

  function validationStep(stepValidation: number) {
    switch (stepValidation) {
      case 1:
        if (values.firstName === '') {
          addToast('Preencha o primeiro nome', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_firstName')?.focus();
          return false;
        }
        if (values.firstName.length <= 2) {
          addToast('Primeiro nome deve conter no mínimo três caracteres', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_firstName')?.focus();
          return false;
        }
        if (values.lastName === '') {
          addToast('Preencha o sobrenome', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_lastName')?.focus();
          return false;
        }
        if (cpf === '') {
          addToast('Preencha o CPF', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_cpf')?.focus();
          return false;
        }

        if (values.dateOfBirth === '') {
          addToast('Preencha a data de aniversário', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_dateOfBirth')?.focus();
          return false;
        }
        if (values.genre === '') {
          addToast('Selecione seu gênero sexual', {
            appearance: 'warning',
            autoDismiss: true,
          });
          return false;
        }
        if (values.email === '') {
          addToast('Preencha o e-mail', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_email')?.focus();
          return false;
        }
        break;
      case 2:
        const anyFieldHasValueInFone = Boolean(
          values.ddd.length + values.number.length
        );

        if (!anyFieldHasValueInFone) return true;

        if (values.countryCode === '') {
          addToast('Preencha p código de discagem', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_countryCode')?.focus();
          return false;
        }
        if (values.ddd === '') {
          addToast('Preencha o DDD', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_ddd')?.focus();
          return false;
        }
        if (values.number === '') {
          addToast('Preencha o número de telefone', {
            appearance: 'warning',
            autoDismiss: true,
          });
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
          addToast('Preencha o CEP', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_cep')?.focus();
          return false;
        }
        if (country === '') {
          addToast('Preencha o país', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_country')?.focus();
          return false;
        }
        if (state === '') {
          addToast('Preencha o estado', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_state')?.focus();
          return false;
        }
        if (city === '') {
          addToast('Preencha a cidade', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_city')?.focus();
          return false;
        }
        if (neighborhood === '') {
          addToast('Preencha o bairro', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_neighborhood')?.focus();
          return false;
        }
        if (address === '') {
          addToast('Preencha o endereço', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_address')?.focus();
          return false;
        }
        if (numberAddress === '') {
          addToast('Preencha o número de endereço', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_numberAddress')?.focus();
          return false;
        }
        break;
      case 4:
        if (values.username === '') {
          addToast('Preencha o nome de usuário', {
            appearance: 'warning',
            autoDismiss: true,
          });
          document.getElementById('id_username')?.focus();
          return false;
        }
        if (values.password === '') {
          addToast('Preencha a senha do usuário', {
            appearance: 'warning',
            autoDismiss: true,
          });
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
      .post('professor', {
        administrador: {
          pessoa: {
            nome: values.firstName,
            sobrenome: values.lastName,
            cpf: util.onlyNumbers(cpf),
            dataNascimento: values.dateOfBirth,
            sexo: values.genre,
            numero: numberAddress,
            usuario: values.username,
            senha: values.password,
            telefone: {
              CodigoDiscagem: values.countryCode,
              Ddd: values.ddd.slice(-2),
              NumeroTelefone: values.number,
              TipoTelefone: values.typeFone,
            },
            endereco: {
              Cep: util.onlyNumbers(cep),
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
      .then(({ status, data }) => {
        if (status === 206) {
          addToast(data, {
            appearance: 'warning',
            autoDismiss: true,
          });
          return;
        }

        setRegisterConfirm(true);

        setTimeout(() => {
          setRegisterConfirm(false);

          history.push('/teacher/home');
        }, 3600);
      })
      .catch((err) => {
        console.error(err);
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
          setValues={{
            setCpf,
          }}
          cpf={cpf}
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
