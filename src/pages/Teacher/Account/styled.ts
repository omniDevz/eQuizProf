import styled from 'styled-components';

import { CollapseBody } from '../../../components/Collapse/styled';
import { FormFieldWrapper } from '../../../components/FormField/styled';
import { RadioButtonWrapper } from '../../../components/RadioButton/styled';
import { SelectWrapper } from '../../../components/Select/styled';
import { ButtonStyled } from '../../../components/Button/styled';

export const Title = styled.h2`
  font-size: 3.2rem;
  padding: 1.6rem 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  padding: 0 0.8rem;
  margin-bottom: 1.6rem;

  ${FormFieldWrapper}, ${SelectWrapper}, ${RadioButtonWrapper} {
    margin-bottom: 1.2rem;
    width: 100%;
  }

  ${CollapseBody} > {
    ${FormFieldWrapper}, ${SelectWrapper}, ${ButtonStyled} {
      &:first-child {
        margin-top: 1.6rem;
      }
    }

    ${ButtonStyled} {
      margin-bottom: 1.6rem;
    }
  }
`;

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.8rem;
  width: 100%;

  &:first-of-type {
    margin-top: 1.6rem;
  }
`;

export const TypesFone = styled.div`
  width: 48%;
  display: block;
  margin-right: auto;
  margin-top: 1.6rem;
`;

export const ThreeColumns = styled.div`
  display: grid;
  grid-template-columns: 8rem 8rem auto;
  column-gap: 0.8rem;

  &:first-of-type {
    margin-top: 1.6rem;
  }
`;

export const ButtonsWrapper = styled.div`
  row-gap: 0.8rem;
  margin-bottom: 2.4rem;
`;
