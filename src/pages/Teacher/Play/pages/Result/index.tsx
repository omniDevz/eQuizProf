import React from 'react';

import Button from '../../../../../components/Button';
import Item from './components/Item';

import {
  WrappersButtons,
  ResultWrapper,
  ListStudents,
  SubTitle,
} from './styled';

const Result: React.FC = () => {
  return (
    <ResultWrapper>
      <SubTitle>Resultado geral</SubTitle>
      <ListStudents>
        <Item name="Nome aluno" />
      </ListStudents>
      <WrappersButtons>
        <Button color="primary-outline">Fechar</Button>
      </WrappersButtons>
    </ResultWrapper>
  );
};

export default Result;
