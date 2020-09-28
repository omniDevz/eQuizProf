import styled from 'styled-components';
import { FiEdit, FiTrash } from 'react-icons/fi';

import logoSVG from '../../../../../assets/images/icons/iconTime.svg';

export const SlideWrapper = styled.div`
  background: ${(props) => props.theme.colors.box};
  box-shadow: var(--box-shadow);
  border-radius: 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    'number timer'
    'slide slide'
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

export const SlideText = styled(TextHeader)`
  grid-area: slide;
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.tertiary};
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
