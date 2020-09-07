import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FormFieldWrapper } from '../../components/FormField/styled';

export const Title = styled.h2`
  padding: 2rem 24px 8px;
  font-size: 4.6rem;
  width: 100%;

  @media (min-width: 768px) {
    padding-top: 3.2rem;
    text-align: center;
  }
`;

export const Description = styled.p`
  padding: 0 24px;
  font-size: 1.8rem;
  width: 100%;

  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const Form = styled.form`
  padding: 5.2rem 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  > button:last-child {
    margin-top: 20px;
    margin-bottom: 16px;
  }
`;

export const FieldsWrapper = styled.fieldset`
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${FormFieldWrapper}:first-of-type {
    margin-bottom: 2.4rem;
  }
`;

export const LinkLogin = styled(Link)`
  padding: 0 24px;
  font-size: 1.8rem;
  width: 100%;
  text-align: center;
`;
