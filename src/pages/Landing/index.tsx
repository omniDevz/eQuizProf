import React from 'react';
import Lottie from 'lottie-react-web';
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

import lottieBooks from '../../assets/lottie/books.json';

import {
  LandingPage,
  FistFold,
  Title,
  Description,
  Section,
  Article,
} from './styled';

function Landing() {
  return (
    <LandingPage>
      <FistFold>
        <PageHeader />
        <Title>Conte conosco para a prática de suas aulas</Title>

        <Lottie
          options={{
            autoplay: true,
            loop: true,
            animationData: lottieBooks,
          }}
        />

        <Article>
          <Button color="primary-outline">
            <Link to="/login" title="Faça o login">
              Entrar
            </Link>
          </Button>

          <Link
            to="/newRegister"
            title="Não possui cadastro? Faça o agora mesmo"
          >
            Não possui cadastro? <b>Faça agora mesmo</b>
          </Link>
        </Article>
      </FistFold>

      <Section>
        <Article>
          <Title>Suas aulas em outro nível!</Title>
          <Description>
            Que tal levar um gameshow e todo um ecosistema para auxiliar em suas
            aulas
          </Description>
        </Article>
        <Button color="primary-outline">
          <Link to="/newRegister" title="Cadastra-se">
            Cadastrar
          </Link>
        </Button>
      </Section>

      <Section>
        <Article>
          <Title>Entre e ensine seus alunos</Title>
          <Description>
            Ensine agora mesmo seus alunos da forma só a gente faz!
          </Description>
        </Article>
        <Button color="primary-outline">
          <Link to="/login" title="Faça o login">
            Entrar
          </Link>
        </Button>
      </Section>

      <Footer />
    </LandingPage>
  );
}

export default Landing;
