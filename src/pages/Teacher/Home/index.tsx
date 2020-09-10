import React from 'react';
import { FiCoffee, FiUsers } from 'react-icons/fi';

import PageDefault from '../../../components/PageDefault';

import {
  Container,
  Content,
  Number,
  Description,
  ContainerRow,
  SubTitle,
  Circle,
  Graph,
} from './styled';

function Home() {
  return (
    <PageDefault>
      <Container>
        <Content>
          <Number>0,000</Number>
          <Description>Quizzers realizados</Description>
        </Content>
        <FiCoffee />
      </Container>

      <Container>
        <Content>
          <Number>0,000</Number>
          <Description>Alunos cadastrados</Description>
        </Content>
        <FiUsers />
      </Container>

      <ContainerRow>
        <SubTitle>Último quiz realizado</SubTitle>
        <Description>
          <Circle />
          Médio de acertos
        </Description>
        <Graph></Graph>
      </ContainerRow>
    </PageDefault>
  );
}

export default Home;
