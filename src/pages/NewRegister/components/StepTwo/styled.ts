import styled from 'styled-components';
import {
  FormFieldWrapper,
  Input,
  Text,
} from '../../../../components/FormField/styled';

export const Container = styled.article``;

export const FieldsWrapper = styled.div`
  align-items: flex-start;
`;

export const ContainerRadiosButtons = styled.div`
  width: 52%;
`;

export const Title = styled.h2`
  padding: 2rem 24px 8px;
  font-size: 4.6rem;
  width: 100%;
`;

export const Form = styled.form`
  padding: 40px 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 12px;
  flex: 1;
`;

export const ThreeColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 6.4rem) auto;
  column-gap: 12px;
  margin-bottom: 6.4rem;
  margin-top: 3.2rem;

  ${FormFieldWrapper} {
    &:nth-child(2),
    &:nth-child(1) {
      ${Input} {
        padding: 1.2rem;
        text-align: center;
      }

      ${Text} {
        padding: 0.6rem;
      }
    }
  }
`;

export const ButtonsWrapper = styled.div`
  margin-bottom: 2.4rem;

  button {
    margin: 8px auto;
  }
`;
