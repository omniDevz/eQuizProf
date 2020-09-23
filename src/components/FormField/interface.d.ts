import { Link } from 'react-router-dom';

export interface LabelProps {
  type: string;
}
export interface InputProps {
  hasValue: boolean;
  hasChildren: boolean;
}

export interface TextProps {
  type: string;
  hasLabel: boolean;
}

export interface ButtonCircleProps {
  strokeWidth?: string;
}

export interface FormFieldProps {
  value: string;
  name: string;
  label: string;
  onChange: FunctionComponentElement;
  onClick?: FunctionComponentElement;
  type?: 'textarea' | 'text' | 'number' | 'date' | string;
  stroke?: string;
  prefix?: string;
}
