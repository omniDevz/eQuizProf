import styled from 'styled-components';

import { ButtonStyled } from '../../../../../components/Button/styled';

export const ItemWrapper = styled.div`
  padding: 1.6rem;
  column-gap: 1.6rem;
  margin-top: 1.6rem;
  border-radius: 3.2rem;
  box-shadow: var(--box-shadow);
  background: ${(props) => props.theme.colors.box};

  &:first-child {
    margin-top: 0;
  }
`;

export const HeaderItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.2rem;
  grid-gap: 1.6rem;
  align-items: flex-start;

  svg {
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
    transform: scale(1);
    transition: all 260ms ease-in-out;
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      transform: scale(0.92);
    }
  }
`;

export const Infos = styled.div``;

export const DescriptionQuiz = styled.p`
  width: 100%;
  margin-bottom: 1.6rem;
`;

export const NameQuiz = styled.label`
  color: ${(props) => props.theme.colors.primary};
  font: 500 2.4rem 'Roboto', sans-serif;
  text-shadow: var(--text-shadow);
  width: 100%;
  margin-bottom: 0.4rem;
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
