import React from 'react';

import Button from '../../../../components/Button';
import Collapse from '../../../../components/Collapse';

import {
  Container,
  TitleWrapper,
  Title,
  Description,
  Term,
  ButtonsWrapper,
} from './styled';

import { StepFiveProps } from './interface';

const StepFive: React.FC<StepFiveProps> = ({
  handleConfirmRegister,
  handleStep,
}) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Contrato</Title>
        <Description>
          Ao finalizar o cadastro, você estará aceitando o Termo de Uso
        </Description>
      </TitleWrapper>

      <Collapse label="Termo de Uso">
        <Term>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was in the 1960s with the release
          of sheets containing Lorem Ipsum passages, and more recently with
          desktop publishing software like PageMaker including versions of Lorem
          Ipsum
        </Term>
      </Collapse>

      <ButtonsWrapper>
        <Button onClick={handleConfirmRegister} color="primary">
          Finalizar
        </Button>
        <Button onClick={() => handleStep(3, 2)} color="primary-outline">
          Voltar
        </Button>
      </ButtonsWrapper>
    </Container>
  );
};

export default StepFive;
