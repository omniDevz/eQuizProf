import styled, { css } from 'styled-components';

import {
  InputProps,
  TextProps,
  LabelProps,
  ButtonCircleProps,
} from './interface';

export const FormFieldWrapper = styled.div`
  width: 100%;
`;

export const Label = styled.label<LabelProps>`
  position: relative;
  width: 100%;

  background: transparent;
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.2rem;
  box-shadow: var(--box-shadow);

  border: 2.5px solid ${(props) => props.theme.colors.primary};
  border-radius: 32px;

  padding: 0 1.4rem;

  ${(props) =>
    props.type === 'textarea'
      ? css`
          height: 8rem;
        `
      : css`
          height: 4.2rem;
        `}
`;

export const Text = styled.label<TextProps>`
  color: ${(props) => props.theme.colors.tertiaryOpacity64};

  height: 2.2rem;
  position: absolute;
  top: 50%;
  left: 0.6rem;
  transform: translateY(-50%);

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 1.8rem;
  font-style: normal;

  padding: 1.4rem 1.2rem;
  border-radius: 1.2rem;

  transition: 240ms ease-in-out;

  ${({ type }) =>
    type === 'date' &&
    css`
      background: ${(props) => props.theme.colors.secondary};
    `}

  ${({ hasLabel }) =>
    !hasLabel &&
    css`
      display: none;
    `}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    background: ${(props) => props.theme.colors.secondary};
    border: 3px solid ${(props) => props.theme.colors.primary};
    border-radius: 2rem;
    transform: scaleX(0);
    transition: 360ms ease-in-out;
  }
`;

export const Input = styled.input<InputProps>`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 1.8rem;
  font-weight: 500;

  padding-top: 0;
  outline: 0;
  width: 100%;
  background: transparent;
  border: none;

  resize: none;

  &:focus {
    + ${Text} {
      color: ${(props) => props.theme.colors.tertiary};
      z-index: 1;
      left: 1.6rem;
      top: 0;
      font-weight: normal;
      transform: scale(0.8) translateY(-1.5rem);
      padding-top: 0.8rem;

      &:before {
        transform: scaleX(1);
      }
    }
  }
  ${({ hasValue }) =>
    hasValue &&
    css`
      + ${Text} {
        color: ${(props) => props.theme.colors.tertiary};
        z-index: 1;
        left: 0;
        top: 0;
        font-weight: normal;
        transform: scale(0.8) translateY(-1.5rem);
        padding-top: 0.8rem;

        &:before {
          transform: scaleX(1);
        }
      }
    `};

  ${({ hasChildren }) =>
    hasChildren &&
    css`
      padding-right: 8rem;
    `};
`;

export const Textarea = styled.textarea<InputProps>`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 2rem;
  font-weight: 600;

  outline: 0;
  width: 100%;
  background: transparent;
  border: none;

  resize: none;

  &:focus {
    + ${Text} {
      color: ${(props) => props.theme.colors.tertiary};
      z-index: 1;
      left: 1.6rem;
      top: 0;
      font-weight: normal;
      transform: scale(0.8) translateY(-1.5rem);

      &:before {
        transform: scaleX(1);
      }
    }
  }
  ${({ hasValue }) =>
    hasValue &&
    css`
      + ${Text} {
        color: ${(props) => props.theme.colors.tertiary};
        z-index: 1;
        left: 0;
        top: 0;
        font-weight: normal;
        transform: scale(0.8) translateY(-1.5rem);

        &:before {
          transform: scaleX(1);
        }
      }
    `};

  ${({ hasChildren }) =>
    hasChildren &&
    css`
      padding-right: 8rem;
    `};
`;

export const Prefix = styled.label`
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  color: ${(props) => props.theme.colors.tertiaryOpacity64};
`;

export const ButtonCircle = styled.button<ButtonCircleProps>`
  position: absolute;
  top: -2.5px;
  bottom: -2.5px;
  right: -2.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  width: auto;
  padding: 0.8em;
  padding-right: 2.4rem;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: var(--box-shadow);
  transition: all 260ms ease-in-out;

  svg,
  img {
    width: 37px;
    height: 37px;
    color: ${(props) => props.theme.colors.secondary};
    border-radius: 32px;
    border: 3px solid ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.primary};
    stroke-width: ${({ strokeWidth }) => strokeWidth};
    transition: all 260ms ease-in-out;
    padding: 1px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:focus-within,
  &:hover {
    padding-right: 0.8em;
    padding-left: 2.4rem;

    svg,
    img {
      transform: rotate(360deg);
    }
  }
`;
