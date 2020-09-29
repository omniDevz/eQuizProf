import styled from 'styled-components';
import { FiX, FiCheck } from 'react-icons/fi';

import { FormFieldWrapper } from '../../../../../components/FormField/styled';

export const FieldRadioButton = styled.div`
  position: relative;
  width: 100%;

  ${FormFieldWrapper} input {
    width: calc(100% - 7.2rem);
  }
`;

export const RadioButtonContainer = styled.label`
  position: absolute;
  display: flex;
  top: 2px;
  right: 2px;
  bottom: 2px;
  background: ${(props) => props.theme.colors.primary};
  width: 8rem;
  border-radius: 3.2rem;
  box-shadow: inset var(--box-shadow);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 0.6rem;
  padding-right: 4rem;
  transition: all 260ms ease-in-out;
  cursor: pointer;

  &:hover {
    padding-left: 4rem;
    padding-right: 0.6rem;
  }
`;

export const IconError = styled(FiX)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: scale(1);
  padding: 0.4rem;
  transition: all 360ms ease-in-out;
  color: ${(props) => props.theme.colors.primary};
`;

export const IconRight = styled(FiCheck)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: scale(0);
  padding: 0.4rem;
  transition: all 360ms ease-in-out;
  color: ${(props) => props.theme.colors.primary};
`;

export const Label = styled.label`
  background: ${(props) => props.theme.colors.box};
  box-shadow: var(--box-shadow);
  border-radius: 3.2rem;
  height: 3.2rem;
  width: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const RadioButtonStyled = styled.input`
  display: none;

  &:checked + ${Label} ${IconRight} {
    transform: scale(1);
  }

  &:checked + ${Label} ${IconError} {
    transform: scale(0);
  }
`;
