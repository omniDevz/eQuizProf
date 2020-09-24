import styled from 'styled-components';

import { FormFieldWrapper } from '../../../../../components/FormField/styled';

export const Form = styled.form`
  margin-top: 3.2rem;
  display: flex;
  padding: 0 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.6rem;
  flex: 1;

  ${FormFieldWrapper} {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 1.6rem;
`;
