import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FormFieldWrapper } from '../../components/FormField/styled';

export const Title = styled.h2`
  padding: 2rem 24px 8px;
  font-size: 4.6rem;
  width: 100%;
`;

export const Description = styled.p`
  padding: 0 24px;
  font-size: 1.8rem;
  width: 100%;
`;

export const Form = styled.form`
  padding: 7.2rem 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldsWrapper = styled.fieldset`
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${FormFieldWrapper} {
    margin-bottom: 8px;
  }
`;

export const LinkLogin = styled(Link)`
  padding: 24px;
  font-size: 1.8rem;
  text-align: center;
  width: 100%;
`;
