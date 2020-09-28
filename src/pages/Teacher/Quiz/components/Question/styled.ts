import styled from 'styled-components';
import { FiEdit, FiTrash } from 'react-icons/fi';

import logoSVG from '../../../../../assets/images/icons/iconTime.svg';

export const QuestionWrapper = styled.div`
  background: ${(props) => props.theme.colors.box};
  box-shadow: var(--box-shadow);
  border-radius: 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    'number timer'
    'question question'
    'response response'
    '- actions';
  justify-content: center;
  grid-gap: 0.8rem;
  padding: 1.6rem 2.4rem;
  width: 100%;
`;

export const TextHeader = styled.p`
  font-size: 2rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

export const Number = styled(TextHeader)`
  grid-area: number;
  text-align: left;
`;

export const Timer = styled(TextHeader)`
  grid-area: timer;
  padding: 1rem;
  padding-right: 1.12rem;
  padding-bottom: 0.8rem;
  text-align: right;
  background: url(${logoSVG});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;
`;

export const QuestionText = styled(TextHeader)`
  color: ${(props) => props.theme.colors.tertiary};
  grid-area: question;
  font-size: 2.4rem;
`;

export const ResponseWrapper = styled.div`
  grid-area: response;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.8rem;
`;

export const Response = styled.p`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.box};
  box-shadow: var(--box-shadow);
  border-radius: 3.2rem;
  text-align: center;
  padding: 0.8rem;
`;

export const ActionsWrapper = styled.div`
  grid-area: actions;
  flex-direction: row;
  justify-content: flex-end;
  grid-gap: 1.6rem;
  padding-top: 0.8rem;

  a {
    display: flex;
    align-items: center;
  }
`;

export const IconEdit = styled(FiEdit)`
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: var(--text-shadow);
  transform: scale(1);
  transition: all 260ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;

export const IconTrash = styled(FiTrash)`
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: var(--text-shadow);
  transform: scale(1);
  transition: all 260ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;
