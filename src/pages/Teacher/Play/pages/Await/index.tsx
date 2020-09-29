import React from 'react';

import Button from '../../../../../components/Button';
import Item from './components/Item';

import {
  WrappersButtons,
  AwaitWrapper,
  ListStudents,
  SubTitle,
} from './styled';

const Await: React.FC = () => {
  return (
    <AwaitWrapper>
      <SubTitle>
        <b>5</b> alunos online
      </SubTitle>
      <ListStudents>
        <Item name="Nome aluno" />
        <Item name="Nome aluno" />
        <Item name="Nome aluno" />
        <Item name="Nome aluno" />
        <Item name="Nome aluno" />
        <Item name="Nome aluno" />
        <Item name="Nome aluno" />
        <Item name="Nome aluno" />
        <Item name="Nome aluno" />
      </ListStudents>
      <WrappersButtons>
        <Button color="primary-outline">Cancelar</Button>
        <Button color="primary">Iniciar</Button>
      </WrappersButtons>
    </AwaitWrapper>
  );
};

export default Await;
