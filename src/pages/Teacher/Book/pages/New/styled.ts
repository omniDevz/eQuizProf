import styled from 'styled-components';

import { ButtonStyled } from '../../../../../components/Button/styled';
import { FormFieldWrapper } from '../../../../../components/FormField/styled';

export const Form = styled.form`
  margin: 3.2rem 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  flex: 1;

  ${FormFieldWrapper} {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 2.4rem;
`;

export const InputAndButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 4.8rem;
  grid-gap: 1.6rem;
  width: 100%;

  ${ButtonStyled} {
    padding: 0;

    svg {
      position: static;
      transform: none;
    }
  }
`;
