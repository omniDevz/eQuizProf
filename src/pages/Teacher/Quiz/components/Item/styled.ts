import styled from 'styled-components';

import { ButtonStyled } from '../../../../../components/Button/styled';

export const ItemWrapper = styled.div`
  padding: 1.6rem;
  grid-gap: 1.6rem;
  margin-top: 1.6rem;
  border-radius: 3.2rem;
  box-shadow: var(--box-shadow);
  background: ${(props) => props.theme.colors.box};

  &:first-child {
    margin-top: 0;
  }
`;

export const NameQuiz = styled.label`
  color: ${(props) => props.theme.colors.primary};
  font: 500 2.4rem 'Roboto', sans-serif;
  text-shadow: var(--text-shadow);
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  flex-direction: row;
  grid-gap: 1.6rem;
  width: 100%;

  ${ButtonStyled} {
    padding: 0.6rem 1.2rem;
    font-size: 1.8rem;
  }
`;
