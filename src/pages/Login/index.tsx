import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import FormField from '../../components/FormField';
import Button from '../../components/Button';
import PageDefault from '../../components/PageDefault';

import useForm from '../../hooks/useForm';
import { useAuth } from '../../contexts/auth';

import iconRecovery from '../../assets/images/icons/recoveryPassword.svg';

import { Title, Description, Form, FieldsWrapper, LinkLogin } from './styled';
import { useToasts } from 'react-toast-notifications';

const Login: React.FC = () => {
  const valuesInitials = {
    username: 'padoca',
    password: '123',
  };

  const { handleChange, values } = useForm(valuesInitials);
  const { signIn } = useAuth();

  const { addToast } = useToasts();

  useEffect(() => {
    if (window.location.href.search('tokenExpired') <= 0) return;

    addToast('Sua autenticação expirou, efetue o login novamente', {
      appearance: 'info',
      autoDismiss: true,
    });

    document.getElementById('id_username')?.focus();
  }, [addToast]);

  function loginTeacher() {
    signIn(values.username, values.password);
  }

  return (
    <PageDefault>
      <Title>Entre</Title>
      <Description>Deixe seu ensino mais engajador</Description>

      <Form>
        <FieldsWrapper>
          <FormField
            label="Usuário"
            name="username"
            value={values.username}
            onChange={handleChange}
            maxLength={15}
          />
          <FormField
            label="Senha"
            name="password"
            value={values.password}
            onChange={handleChange}
            maxLength={32}
          >
            <Link to="/recoveryPassword" title="Recuperar sua senha">
              <img src={iconRecovery} alt="Ícone para recuperação de senha" />
            </Link>
          </FormField>
        </FieldsWrapper>
        <Button color="primary" onClick={loginTeacher}>
          Entrar
        </Button>
      </Form>
      <LinkLogin to="/newRegister" title="Cadastre-se agora mesmo">
        Não tem cadastro? <b>Venha com a gente</b>
      </LinkLogin>
    </PageDefault>
  );
};

export default Login;
