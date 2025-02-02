import styled from 'styled-components';
import { FiEdit } from 'react-icons/fi';
import { ButtonStyled } from '../../../../../components/Button/styled';

export const Header = styled.div`
  padding: 3.2rem 24px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Text = styled.label`
  font-weight: 500;
  color: ${(props) => props.theme.colors.tertiary};
  text-shadow: var(--text-shadow);
`;

export const Infos = styled.div`
  align-items: flex-start;
`;

export const Name = styled(Text)`
  font-size: 3.2rem;
`;

export const Description = styled(Text)`
  font-size: 1.8rem;
`;

export const IconEdit = styled(FiEdit)`
  color: ${(props) => props.theme.colors.primary};
  text-shadow: var(--text-shadow);
  height: 3.6rem;
  width: 3.6rem;
  cursor: pointer;
  transform: scale(1);
  transition: all 260ms ease-in-out;

  &:hover {
    transform: scale(0.9);
  }
`;

export const ListQuiz = styled.div`
  max-height: calc(100vh - 36rem);
  overflow-y: auto;
  grid-gap: 1.6rem;
  margin: 0 24px;
  flex: 1;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  grid-gap: 1.6rem;
  margin: 2.4rem 24px;

  ${ButtonStyled} {
    width: 100%;
    margin: auto;
  }
`;
