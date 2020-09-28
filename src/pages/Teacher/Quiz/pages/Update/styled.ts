import styled from 'styled-components';

import { FormFieldWrapper } from '../../../../../components/FormField/styled';

export const Form = styled.form`
  margin: 3.2rem 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.6rem;
  flex: 1;

  ${FormFieldWrapper} {
    width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  padding-bottom: 2.4rem;
  grid-gap: 1.6rem;
`;
