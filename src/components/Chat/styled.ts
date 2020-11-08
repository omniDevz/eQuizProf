import styled, { css } from 'styled-components';
import { FiX } from 'react-icons/fi';

import { FormFieldWrapper, Label, ButtonCircle } from '../FormField/styled';

import { ChatProps } from './interface';

export const ContainerIcon = styled.button`
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 3.2rem;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.box};
  box-shadow: var(--box-shadow);
  padding: 0.4rem 0.8rem;
  transition: all 260ms ease-in-out;

  svg {
    stroke-width: 1.5px;
  }

  &:hover {
    border-left-width: 4px;
    border-right-width: 4px;
  }
`;

export const ContainerChat = styled.div<ChatProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  justify-content: flex-end;
  overflow: hidden;
  transform: scale(0);
  transition: all 260ms ease-in-out;
  overflow: hidden;

  ${FormFieldWrapper} {
    background: ${(props) => props.theme.colors.primary};
    border-top-left-radius: 3.2rem;
    border-top-right-radius: 3.2rem;
  }

  ${Label}, ${ButtonCircle} {
    box-shadow: none;
  }

  ${({ chatOpen }) =>
    chatOpen &&
    css`
      transform: scale(1);
    `}
`;

export const ContainerMessage = styled.div`
  background: ${(props) => props.theme.colors.box};
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-top-left-radius: 3.2rem;
  border-top-right-radius: 3.2rem;
  box-shadow: var(--box-shadow);
  width: calc(100% - 48px);
  padding: 1.6rem 0.8rem;
  margin: 0 48px -2px;
  grid-gap: 0.8rem;
  max-height: 47vh;
  overflow-y: all;
`;

export const Message = styled.label`
  max-width: 90%;
  padding: 0.8rem 1.2rem;
  border-radius: 3.2rem;
  box-shadow: var(--box-shadow);
  font-size: 1.6rem;
`;

export const QuizMessage = styled(Message)`
  text-align: left;
  margin-right: auto;
  background: ${(props) => props.theme.colors.box};
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-bottom-left-radius: 0;
`;

export const Close = styled(FiX)`
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 4.8rem;
  border: 3px solid ${(props) => props.theme.colors.primary};
  box-shadow: var(--box-shadow);
  background: ${(props) => props.theme.colors.box};
  padding: 0.2rem;
  stroke: 2px;
  cursor: pointer;
  transform: scale(1);
  transition: all 320ms ease-in-out;
  margin-left: auto;
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;

  &:hover {
    transform: scale(0.9);
  }
`;
